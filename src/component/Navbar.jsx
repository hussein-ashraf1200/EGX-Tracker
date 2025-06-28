import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // قائمة البروفايل
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const barHandle = () => setIsOpen(!isOpen);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const goToWatchlist = () => {
    navigate("/watchlist");
  };

  return (
    <div className="flex justify-between items-center relative z-50">
      {/* logo */}
      <div className="flex items-center gap-2 p-2">
        <img
          src="https://res.cloudinary.com/ddigrrkv7/image/upload/v1751109880/logo_bsjvmp.png"
          loading="lazy"
          alt="logo image"
        />
        <h1 className="font-news font-bold text-[#121417] text-xl">
          EGX TracKer
        </h1>
      </div>

      {/* sections */}
      <ul className="hidden sm:flex flex-row gap-6 font-news items-center">
        <li className="hover:bg-sky-300 rounded-2xl p-1">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:bg-sky-300 rounded-2xl p-1">
          <Link to="/market">Markets</Link>
        </li>

        <li className="hover:bg-sky-300 rounded-2xl p-1">
          <Link to="/watchlist">WatchList</Link>
        </li>
      </ul>

      {/* profile & notifications */}
      <div className="hidden sm:flex flex-row gap-2 p-2 items-center relative">
        <div className="bg-[#EBEDF2] p-2 text-xl rounded-xl">
          <IoMdNotificationsOutline />
        </div>

        {/* profile image with dropdown */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/ddigrrkv7/image/upload/v1751109880/profile_xwdlay.png"
            loading="lazy"
            alt="profile image"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
              <button
                onClick={goToWatchlist}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                📈 Watchlist
              </button>
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                🚪 Sign out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* small screens menu icon */}
      <div
        className="sm:hidden block p-2 text-2xl cursor-pointer"
        onClick={barHandle}
      >
        <HiOutlineBars3BottomRight />
      </div>

      {/* small screen dropdown menu */}
      {isOpen && (
        <ul className="sm:hidden absolute right-2 top-16 bg-white shadow-md rounded-lg p-4 space-y-2 font-news">
          <li className="hover:bg-sky-300 rounded-2xl p-1">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:bg-sky-300 rounded-2xl p-1">
            <Link to="/">Markets</Link>
          </li>

          <li className="hover:bg-sky-300 rounded-2xl p-1">
            <Link to="/watchlist">WatchList</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
