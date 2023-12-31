import { Link , useNavigate} from 'react-router-dom';
import { useContext , useEffect, useState } from 'react';
import { UserContext } from '../App';

 const MyOrders= ()=>{
  const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [myOrders , setMyorders] =useState();

    useEffect( ()=>{
      if(user)
      setMyorders(user.myorders)
    },[user]
    );
     
    if(myOrders)
    return(
    <div className='divide-y'>
      <div className="fixed w-full shadow-xl flex items-center space-x-4  bg-slate-300 p-4">
        <i className="fa-solid fa-arrow-left fa-xl" onClick={()=>{navigate(-1)}}></i>
        <Link to={'/'}>
           <i className="fa-brands fa-shopify fa-xl"></i>
        </Link> 
        <p className='font-semibold ml-4'>My MyOrder</p>
      </div>
      <br/>
      <br/>
      {
        myOrders.map((itm)=>{ return(<List item ={itm} key={Math.random()}/>)})
      }
    </div>)
    else
    return(<>Loading...</>)
 }

 function List({item}){
  const date = new Date(item.orderid);
    return (<div className='flex items-center justify-between pr-6'>
        <img
            src={item.orderitem[0].images[0]}
            alt="Product"
            className="w-32  h-auto object-contain"
            />
        <div>
            <h3 className="font-bold w-32 text-gray-800 truncate ...">{item.orderid}</h3>
            <p className="text-gray-600">Ordered On :  { date.getDate() + "/"+(parseInt(date.getMonth())+1)+"/" +date.getFullYear()}</p>
            
        </div>
        <p className='font-bold'> &#10093;</p>
    </div>)
 }
 export default MyOrders;