import { Link , useNavigate } from "react-router-dom";
import { useState, useContext , useEffect } from "react";
import Address from './address.js'
import { UserContext } from "../App";

function Checkout() {
  const { newItem, updateCart , updateCartitemquantity } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([...newItem]);
  const [address, setAddress] = useState({addressLine1:"Please Edit"});
  const [isTochangeaddress, setisTochangeAddress] = useState(false);
  const navigate = useNavigate();

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
 
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity*item.discountPercentage)/100,
    0
  );
  const tax = 0.1 * subtotal;
  const total = subtotal + tax;
  useEffect(()=>setCartItems(newItem), [newItem]);
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="fixed w-full shadow-xl flex items-center justify-between bg-slate-300 p-4">
        <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>{navigate(-1)}}></i>
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
          <p className="leading-tight">{address.addressLine1} , {address.city ?address.pincode +","+address.city+","+address.state:"" }</p>
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
              <span className="text-black">Deliver fees:</span>
              <span className="text-green-600">free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black font-semibold">Total:</span>
              <span className="font-bold">&#8377;{total.toFixed(2)}</span>
            </div>
            <div className="mb-2 p-2 text-center text-green-600 bg-green-100 w-full">
              Total saving: &#8377; {parseInt(totalDiscount)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full p-4">

          <Link
          to="/"
          className="bg-green-600 text-center w-full text-white font-semibold py-2 px-4 rounded"
          >
          Place Order
          </Link>
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
