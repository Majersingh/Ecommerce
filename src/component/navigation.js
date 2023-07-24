import {Link} from "react-router-dom";
import {useContext} from "react";
import { UserContext } from "../App";
const Navbtn= ()=>{
  const { newItem,  } = useContext(UserContext);
    return(
        < div className="fixed bottom-0 w-full">
            <div className="flex flex-row divide-x-2 ">
                {<Link to={'/'} className="basis-1/4 border p-1  bg-white text-center" >
                  <button  className="inline-block p-1  lg:p-2   text-black  text-xs leading-tight uppercase focus:font-bold focus:text-green-900"  >
                    <i className="fa-solid fa-house fa-xl"></i>
                  </button>
                   <div className="p-0 text-xs font-thin">Home</div>
                </Link>}
                {<Link to={'/categories'} className="basis-1/4 border p-1 bg-white text-center" >
                  <button  className=" inline-block p-1  lg:p-2   text-black  text-xs leading-tight uppercase focus:font-bold focus:text-green-900" >
                    <i className="fa-solid fa-store fa-xl"></i>
                  </button>
                    <div className=" p-0 text-xs font-thin">Shop</div>
                </Link>}
                {<Link to={'/cart'} className="basis-1/4 border p-1 bg-white text-center" >
                  <button  className="relative inline-block p-1  lg:p-2   text-black  text-xs leading-tight uppercase focus:font-bold focus:text-green-900"  >
                  <i className="fa-solid fa-cart-shopping fa-xl"></i> 
                   {newItem.length>0?<span className=" h-4 w-4 absolute left-1/2 -top-[.3vh] bg-red-600 text-white rounded-full">{newItem.length} </span>:<></>}
                  </button>
                  <div className=" p-0 text-xs font-thin">Bag</div>
                </Link>}
                {<Link to={'/account'} className="basis-1/4 border p-1 bg-white text-center" >
                  <button  className=" inline-block p-1  lg:p-2   text-black  text-xs leading-tight uppercase focus:font-bold focus:text-green-900" >
                  <i className="fa-solid fa-user fa-xl"></i>
                  </button>
                  <div className="p-0 text-xs font-thin">Profile</div>
                </Link>}
                
            </div>
        </div>
    )
}
export default Navbtn;