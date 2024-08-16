// AvatarDropdown.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notification2 } from "../assets";

const Avatar = ({ setIsAuthenticated, Name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  //ddcdcddddcf
  const [name, setName] = useState("Rahul");
  const toggleDropdown = () => setIsOpen(!isOpen);

  const logout = () => {
    console.log("in logout")
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const removeProfile = async () => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete your account?"
      );
      if (!confirmation) return;

      const id = JSON.parse(sessionStorage.getItem("User")).userId;
      logout();
      const res = await axios.delete(`http://localhost:8080/users/${id}`);
      console.log(res.status);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setName(Name);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-n-8 border border-n-6"
      >
        {/* Replace with your avatar image */}
        <img
          src={notification2}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-n-8 border border-n-6 rounded-md shadow-lg">
          <div className="p-4 border-b border-n-6 text-n-1 text-center">
            {/* Replace with actual user's name */}
            <div className="font-semibold">{name}</div>
          </div>

          <a
            href=""
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
            onClick={removeProfile}
          >
            Remove Profile
          </a>
          <Link
            to={"/allbookings"}
            className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors"
          >
            All Bookings
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="block px-4 py-2 cursor-pointer text-n-1 hover:bg-n-7 rounded-b-md transition-colors"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Avatar;
