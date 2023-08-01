import React from 'react';
import {useContext} from "react";
import { Link} from 'react-router-dom';
import { UserContext } from "../App";

const Profile = () => {
  const { apiUrl} = useContext(UserContext);
  return (
    <div className="container mx-auto p-8 bg-slate-400/25 shadow-lg">
      <h1 className="text-3xl font-bold text-center my-4">User Profile</h1>

      <div className="grid grid-cols-2 gap-4">
        {<Link to='/myorders'>
          <section className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">My Orders</h2>
            {/* Add your order-related content */}
          </section>
        </Link>}
        <section className="bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
          {/* Add your wishlist-related content */}
        </section>

        <section className="bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Saved Addresses</h2>
          {/* Add your saved address-related content */}
        </section>

        <section className="bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Credit Points</h2>
          {/* Add your credit points-related content */}
        </section>
      </div>

      <button className="w-full bg-red-500 text-white py-2 px-4 rounded mt-4" onClick={
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
        });
}}>Logout</button>
    </div>
  );
};

export default Profile;
