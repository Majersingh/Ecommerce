import { Link , useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";

function Cart() {
 
  const { newItem, updateCart , updateCartitemquantity } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    const removedItem = cartItems.find((item) => item._id === itemId);
    if (removedItem) {
      updateCart(removedItem);
    }
  };
 console.log(cartItems)
  const updateQuantity = async (itemId, newQuantity) => {
   setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
    const updateQuantity =  await newItem.find((item) => item._id === itemId);
    if (updateQuantity) {
      updateQuantity.quantity = newQuantity; // using reference property of object
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
  const total = subtotal + tax -totalDiscount;
 useEffect(()=>setCartItems(newItem), [newItem]);
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="fixed w-full shadow-xl flex items-center justify-between bg-slate-300 p-4">
      <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>{navigate(-1)}}></i>
      <Link to={'/'} className="pl-4 text-center">
           <i className="fa-brands fa-shopify fa-xl ml-4"></i>
      </Link> 
        <div className="">Step 1/3</div>
      </div>
      
      <div className="mt-16 flex flex-col space-y-4 p-4 flex-grow">
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            onRemove={() => removeItem(item._id)}
            onUpdateQuantity={ updateQuantity }
          />
        ))}
        
        <div className="flex justify-center p-4">
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
        {newItem.length>0?
          <Link
            to="/checkout"
            className="bg-violet-500 w-full text-center hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Checkout
          </Link>:
          <Link
          to="/"
          className="bg-white text-center w-full shadow-inner border text-green-600 font-semibold py-2 px-4 rounded"
          >
          It Seems Empty Explore
          </Link>
        }
      </div>
    </div>
  );
}

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const { title, price, quantity } = item;

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity( item._id,quantity - 1);
    }
  };

  const incrementQuantity = () => {
    onUpdateQuantity(item._id,quantity + 1);
  };

  return (
    <div className="p-2 flex items-center flex-wrap justify-between bg-white shadow-lg rounded-md">
      <div className="flex items-center space-x-4">
        {<Link to={'/product/'+item._id}>
          <img
              src={item.images[0]}
              alt="Product"
              className="w-32 h-auto object-contain"
            />
        </Link>}
        <div>
          <h3 className="font-semibold text-base w-24 lg:w-auto text-gray-800 truncate ...">{title}</h3>
          <p className="text-gray-600">&#8377;{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex text-xs items-center space-x-2">
        <button
          className=" bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded"
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
      <button className="mt-1 bg-violet-100 text-black hover:bg-violet-300 shodow-inner w-full" onClick={onRemove} > Remove </button>
    </div>
  );
}

export default Cart;
