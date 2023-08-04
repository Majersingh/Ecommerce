import React from 'react';
import {useContext , useState} from "react";
import { Link} from 'react-router-dom';
import { UserContext } from "../App";
import Address from "./address";

const Profile = () => {
  const { apiUrl , user} = useContext(UserContext);
  const [isTochangeaddress, setisTochangeAddress] = useState(false);
  const setAddress=(address)=>{
    user.address=address;
   }
   
  return (
    <div className="container mx-auto  bg-slate-400/25">
      <h1 className="fixed  text-center p-2  shadow-lg  w-full ">Welcome {user.name && user.name.split(" ")[0]}</h1>
      <br/>
      <div className="mt-8 flex flex-wrap justify-between w-full p-4 ">
        {/* My Orders Section */}
        <Link to="/myorders">
          <section className="bg-white rounded-lg h-[10vh] m-2 p-4">
            <h2 className="text-md">My Orders</h2>
            {/* Add your order-related content */}
          </section>
        </Link>

        {/* Credit Points Section */}
        <section className="bg-white rounded-lg h-[10vh] m-2 p-4">
          <h2 className="text-md">My Coins</h2>
          {parseInt(user.mycoins) !==0 ? user.mycoins:<p className='text-xs font-thin'>No Coin</p>}
        </section>

        {/* Shipping Address Section */}
        <section className="grow bg-white rounded-lg p-2 m-2">
            Shipping Address:{" "}
            <button
              className="w-12  bg-white border rounded-lg p-1 text-sm font-medium shadow-l text-[#5e11c2]"
              onClick={() => setisTochangeAddress(true)}
            >
              Edit
            </button>
            {isTochangeaddress ? <Address setAddress={setAddress} setisTochangeaddress={setisTochangeAddress} /> : <></>}
            {user.address ? (
              <p className="leading-tight break-all">{user.address.addressLine1}, {user.address.city ? user.address.pincode + "," + user.address.city + "," + user.address.state : ""}</p>
            ) : (
              <>Please Edit</>
            )}
        </section>
      </div>

      <button className="w-[88vw] bg-red-500 text-white py-2 rounded m-4" onClick={
        ()=>{
        fetch(`${apiUrl}/logout`, { method: 'POST' ,credentials: 'include' })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not OK');
            }
            console.log('Logout successful');
            window.location.replace(`/`);
        })
        .catch(error => {
            console.error('Error:', error);
        });}}>Logout</button>
    </div>
  );
};

export default Profile;
