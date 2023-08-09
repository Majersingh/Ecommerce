import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Address from "./address";

const Profile = () => {
  const { apiUrl, user } = useContext(UserContext);
  const [isTochangeaddress, setisTochangeAddress] = useState(false);

  const setAddress = (address) => {
    user.address = address;
  };

  const handleLogout = () => {
    fetch(`${apiUrl}/logout`, { method: "POST", credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to logout  was not OK");
        }
        console.log("Logout successful");
        window.location.replace(`/`);
      })
      .catch((error) => {
        console.error(" logout Error:", error);
      });
  };

  return (
    <div className="container  bg-slate-100 mx-auto p-4">
      <h1 className="fixed bg-slate-300 top-0 left-0 text-center p-2 shadow-lg w-full">
        Welcome {user.name && user.name.split(" ")[0]}
      </h1>
      <br />
      <div className="mt-8 flex flex-wrap justify-center w-full">
        {/* My Orders Section */}
        <Link
          to="/myorders"
          className="bg-white grow rounded-lg h-[10vh] shadow-lg m-2 p-4"
        >
          <h2 className="text-md">My Orders</h2>
        </Link>

        <section className="bg-white grow rounded-lg h-[10vh] shadow-lg m-2 p-4">
          <h2 className="text-md">My Coins</h2>
          {parseInt(user.mycoins) !== 0 ? (
            user.mycoins
          ) : (
            <p className="text-xs font-thin">No Coin</p>
          )}
        </section>

        <section className="grow bg-white rounded-lg shadow-lg m-2 p-2">
          Shipping Address:{" "}
          <button
            className="w-12 bg-white border rounded-lg p-1 text-sm font-medium shadow-l text-[#5e11c2]"
            onClick={() => setisTochangeAddress(true)}
          >
            Edit
          </button>
          {isTochangeaddress ? (
            <Address
              setAddress={setAddress}
              setisTochangeaddress={setisTochangeAddress}
            />
          ) : (
            <></>
          )}
          {user.address ? (
            <p className="leading-tight break-all">
              {user.address.addressLine1},{" "}
              {user.address.city
                ? user.address.pincode +
                  "," +
                  user.address.city +
                  "," +
                  user.address.state
                : ""}
            </p>
          ) : (
            <>Please Edit</>
          )}
        </section>

        <button
          className="m-2 grow bg-red-500 shadow-lg text-white rounded p-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
