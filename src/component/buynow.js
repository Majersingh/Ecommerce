import { Link, useLocation  , Navigate , useNavigate} from 'react-router-dom';
import {  useState , useContext} from 'react';
import { UserContext } from '../App';
import myImage from './tick.png';
// import Address from './address';

const Buynow = () => {
  const {user ,apiUrl} = useContext(UserContext);
  const location = useLocation();
  const [quantity , setquantity] =useState(1);
  const [useCoins , setUsecoins] =useState(false);
  const [isorderPlaced , setOrderstatus] =useState(0);
  const item ={...location.state , quantity:quantity};
  const navigate = useNavigate();
  const handleorder= async()=>{
    
      try {
        setOrderstatus(1)
        const orderid = new Date().getTime();
        const response = await fetch(`${apiUrl}/addmyorder`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: user.email ,order:{item:[item] , orderid: orderid, mobile:user.mobileNumber}}),
          credentials: 'include' 
        });
        if(response.ok)
        {
          setOrderstatus("ok");
          if(user.myorders)
          user.myorders.unshift({orderitem:[item] , orderid: orderid, mobile:user.mobileNumber});
          console.log('My Order Placed :' ,response.ok);
        }
      } 
      catch (error) {
        setOrderstatus(0);
        console.error('Error: to Post Order', error);
      }
  }

  let coinsValue=user?user.mycoins : 0;
  const subtotal =item.price *item.quantity;
  const totalDiscount = (item.price * item.quantity*item.discountPercentage)/100;
  const tax = 0.1 * subtotal;
  let coinsDiscount = useCoins ? coinsValue : 0;
  let total = subtotal + tax -totalDiscount;

  // If coins discount is greater than total, use only the required amount of coins
  if (coinsDiscount > total) {
    coinsDiscount = total;
    total = 0;
  }
  else{
    total= total-coinsDiscount;
  }

  if(location.state)
  return(
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="fixed w-full shadow-xl flex items-center space-x-4  bg-slate-300 p-4">
        <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>{navigate(-1)}}></i>
        <Link to={'/'}>
           <i className="fa-brands fa-shopify fa-xl"></i>
        </Link> 
        <p className='font-semibold ml-4'>My MyOrder</p>
      </div>
      <br/>
      <br/>

      <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-2 m-4">
            {<Link to={'/product/'+item._id}>
            <img
                src={item.images[0]}
                alt="Product"
                className="w-32  h-auto object-contain"
                />
            </Link>}
            <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">&#8377;{item.price.toFixed(2)}</p>
                <button  className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded" onClick={()=> {if(quantity>1)setquantity(quantity-1)}}>
                -
                </button>
                <span className=" font-bold py-1 px-2 rounded">{item.quantity}</span>
                <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded" onClick={()=> {if(quantity>0)setquantity(quantity+1)}}>
                +
                </button>
            </div>
      </div>
      <br/>
      
      <div className="flex justify-center m-4">
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
            <div className=" p-2 text-center text-green-600 bg-green-100">
              Total saving: &#8377; {parseInt(totalDiscount + coinsDiscount)}
            </div>
          </div>
        </div>

        <select className=" p-2  text-center bg-white text-black  shadow-lg rounded m-4">
         <option defaultValue={'Apply Coupon'} >Apply Coupon</option>
         <option disabled>No Coupon</option>
        </select>

        <div className='mx-4 flex items-center space-x-2 p-2 bg-white shadow-lg rounded '>
            <p className=''>Use From your coins : <span>{coinsValue}</span></p>
            <input type='checkbox' className='w-4 h-4'  onChange={() => setUsecoins(!useCoins)} />
        </div>

        <div className="flex m-4">
          <button  disabled={isorderPlaced ===1} className={`${isorderPlaced==="ok"?'bg-white':'bg-green-600'} text-center w-full text-white font-semibold py-2 px-4 rounded`} onClick={handleorder} >
          {
            isorderPlaced>0?
            <span className="flex items-center justify-center">
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
            </span>:<>Place Order</>
          }
          </button>
        </div>
        {/* order successfull msg */}
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
  )
  else
  return(<Navigate to='/'></Navigate>)
}
export default Buynow;