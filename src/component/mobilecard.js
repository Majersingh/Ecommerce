import { useContext , useState , useEffect} from "react";
import {  Navigate , Link } from "react-router-dom";

import { UserContext } from "../App";

function Mcard(props){
    const [cartState , setCartstate] =useState("Add to Cart");
    const { updateCart  ,newItem } = useContext(UserContext);
    
    const handleCart = ()=>{
        if("Add to Cart" === cartState)
        {
            updateCart(props.item);
            setCartstate('View cart');
        }
        else
        setCartstate("Go to Cart")
    }  

    useEffect(()=>{
        if (newItem.some(item => item._id === props.item._id)) {
            setCartstate("View Cart");
        }
    },[newItem , props.item._id])

    if(cartState !== "Go to Cart")
    return(
        <div className="rounded-xl shadow-xl">
            <br/>
            <div className="rounded overflow-hidden shadow-lg">
                {<Link to={'/product/'+props.item._id}>
                    <img className="w-80  h-36 object-contain" src={`${props.item.images[0]}`} alt=""/>
                </Link>}
                <div className="mt-1 w-80 text-start px-6 font-medium text-base mb-2 truncate ...  ">
                    {<Link  to={'/product/'+props.item._id}> {props.item.title}</Link>} 
                    <span className="inline font-thin ml-4 text-sm lg:text-lg ">
                        {props.item.rating}/5
                    </span>
                </div> 
                <div className="px-6 w-80 mb-2  flex justify-between">
                    <span className="font-semibold">&#8377;{props.item.price}</span>
                    <span className="inline   rounded-xl font-bold text-green-600">{props.item.discountPercentage} %Off</span>
                    <span className=" text-xs inline  p-1 rounded-xl bg-green-600 text-green-900">InStock</span>
                </div>
                <button className="w-1/2 bg-[#848187] text-white p-1" onClick={handleCart}>{cartState}</button>
                <Link to={'/checkout'} >
                <button className="w-1/2 bg-[#5e11c2] text-white p-1">Buy Now</button>
                </Link>
          </div>
        </div>
    )
    else
    return  <Navigate to="/cart" />;
   
}
export default Mcard;