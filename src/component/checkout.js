import { Link , useNavigate } from "react-router-dom";
import { useState, useContext , useEffect } from "react";
import Address from './address.js'
import myImage from './tick.png'
import { UserContext } from "../App";

function Checkout() {
  const { newItem, updateCart , updateCartitemquantity  , user , apiUrl} = useContext(UserContext);
  const [cartItems, setCartItems] = useState([...newItem]);
  const [isTochangeaddress, setisTochangeAddress] = useState(false);
  const [useCoins , setUsecoins] =useState(false);
  const [isorderPlaced , setOrderstatus]=useState(0);
  const navigate = useNavigate();
  
  const setAddress=(address)=>{
   user.address=address;
  }

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    const removedItem = cartItems.find((item) => item._id === itemId);
    if (removedItem) {
      updateCart(removedItem);
    }
  };

  const updateQuantity =  async (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
    const updateQuantity =  await newItem.find((item) => item._id === itemId);
    if (updateQuantity) {
      updateQuantity.quantity = newQuantity;
      updateCartitemquantity();
    }
  };

  const handleorder= async()=>{
    if(newItem.length > 0) //to make sure something then only order placed
    try {
      setOrderstatus(1);
      const orderid =  new Date().getTime();
      const response = await fetch(`${apiUrl}/addmyorder`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user.email ,order:{item:[...newItem] , orderid: orderid, mobile:user.mobileNumber}}),
        credentials: 'include' 
      });
      if(response.ok)
      { 
        setOrderstatus("ok");
        if(user.myorders)
        user.myorders.unshift({orderitem:[...newItem] , orderid: orderid, mobile:user.mobileNumber});
        updateCart({}, true); // here to clear cart when order placed 
        console.log('My Order Placed :' ,response.ok);
      }
    } 
    catch (error) {
      setOrderstatus(0);
      console.error('Error: to Post Order', error);
    }
  }  
 
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity*item.discountPercentage)/100,
    0
  );
  const tax = 0.1 * subtotal;

  let total = subtotal + tax -totalDiscount;

  let coinsValue=user.mycoins ? user.mycoins :0;
  let coinsDiscount = useCoins ? coinsValue : 0;

  if (coinsDiscount > total) {
    coinsDiscount = total;
    total = 0;
  }
  else total= total-coinsDiscount;
  
  useEffect(()=>setCartItems(newItem), [newItem]);
  if(cartItems)
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="fixed w-full shadow-xl flex items-center justify-between bg-slate-300 p-4">
        <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>{navigate(-1)}}> </i>
        <Link to={'/'}>
           <i className="fa-brands fa-shopify fa-xl"></i>
        </Link>
        <p>Order summary</p>
        <p className="">Step 2/3</p>
      </div>
      <br/>
      <br/>
      <div className="flex flex-col space-y-4 p-4 flex-grow">
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            onRemove={() => removeItem(item._id)}
            onUpdateQuantity={(newQuantity) =>
              updateQuantity(item._id, newQuantity)
            }
          />
        ))}

        <br/>
        <div className=" p-2 rounded-lg shadow-md">
          <h2 className="text-base font-bold">Shipping Address:   
            <button className="w-12  ml-2 bg-white border rounded-lg p-1 text-sm font-medium shadow-l text-[#5e11c2]" onClick={()=>setisTochangeAddress(true)}>
                Edit
            </button>
            {isTochangeaddress ?<Address setAddress={setAddress}  setisTochangeaddress={setisTochangeAddress}/>:<></>}
          </h2>
          {user.address ?<p className="leading-tight">{user.address.addressLine1} , {user.address.city ?user.address.pincode +","+user.address.city+","+user.address.state:"" }</p>:<>Please Edit</>}
        </div>

        <div className="flex justify-center p-2">
          <div className="w-full divide-y">
            <div className="flex justify-between mb-2">
              <span className="text-black">Subtotal:</span>
              <span className="">&#8377;{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black">Tax (10%):</span>
              <span className="">&#8377;{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black">Used Coins:</span>
              <span className="text-green-600">-{useCoins?coinsDiscount:0}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black">Discount:</span>
              <span className="text-green-600">-{totalDiscount.toFixed(0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black">Deliver fees:</span>
              <span className="text-green-600">free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black font-semibold">Total:</span>
              <span className="font-bold">&#8377;{total.toFixed(2)}</span>
            </div>
            <div className="mb-2 p-2 text-center text-green-600 bg-green-100 w-full">
              Total saving: &#8377; {parseInt(totalDiscount + coinsDiscount)}
            </div>
          </div>
        </div>

        <select className="p-2 text-center bg-white text-black  shadow-lg rounded">
         <option defaultValue={'Apply Coupon'} >Apply Coupon</option>
         <option disabled>No Coupon</option>
        </select>

        <div className=' flex items-center space-x-2 p-2 bg-white shadow-lg rounded '>
            <p className=''>Use from your coins : <span>{coinsValue}</span></p>
            <input type='checkbox'  onChange={() => setUsecoins(!useCoins)} className='w-4 h-4' />
        </div>
      </div>
      
      <div className="m-4">
        <button className={`${isorderPlaced==="ok"?'bg-white':'bg-green-600'} text-center w- text-white font-semibold py-2 w-full rounded `}  onClick={handleorder} >
        {
          isorderPlaced>0?
          <span className="flex items-center justify-center">
            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
          </span>:<>Place Order</>
        }
        </button>
      </div>
      <div className={`fixed p-4 inset-0 flex flex-col items-center justify-center z-50 bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity ${
            isorderPlaced==="ok" ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
             <img src={myImage} alt="" className='opacity-80 rounded-full'/>
             <p className='font-bold text-green-600'>Order Placed Successfully</p>
             <div className='flex justify-between w-80 p-1 bg-green-600 font-bold divide-x-2 rounded'>
              {
                <Link to='/myorders'><button className=' text-white  w-40'>View</button></Link>
              }
              {
                <Link to='/'><button className=' text-white  w-40'>Explore</button></Link>
              }
             </div>
        </div>
    </div>
  );
}

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const { title, price, quantity } = item;

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    onUpdateQuantity(quantity + 1);
  };

  return (
    <div className="p-2 divide-y flex items-center flex-wrap justify-between bg-white shadow-lg rounded-md">
      <div className="flex items-center space-x-4">
        {<Link to={'/product/'+item._id}>
          <img
              src={item.images[0]}
              alt="Product"
              className="w-32 h-auto object-contain"
            />
        </Link>}
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">&#8377;{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded"
          onClick={decrementQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <button
        className="mt-1 bg-violet-100 text-black hover:bg-violet-300 shodow-inner w-full"
        onClick={onRemove}
        >
        Remove
      </button>
    </div>
  );
}

export default Checkout;
