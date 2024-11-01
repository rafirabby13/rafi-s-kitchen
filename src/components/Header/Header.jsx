/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase.config.jsx";
import { useState } from "react";

const Header = ({ categories, cartData }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsSignUp(true);
        // console.log(res.user)
        setUser(res.user);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleSignOut = () => {
    const confirm = window.confirm("are u sure ??");
    if (confirm) {
      signOut(auth)
        .then(() => {
          setIsSignUp(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Food Categories</Link>
              <ul className="p-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/${category.strCategory}`}>
                      {category.strCategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <img className="h-32 hidden lg:flex" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1 lg:gap-5 text-sm lg:text-4xl">
        {isSignUp ? (
          <>
            <h1 className="text-sm">{user.displayName}</h1>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <button className="btn px-2 lg:px-4 " onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="btn px-2 lg:px-4" onClick={handleSignUp}>
            Sign Up
          </button>
        )}

        <div className="border-2 px-2 py-1.5 relative">
          <Link to={`/cart`}>
            
            <MdOutlineShoppingCart />
          </Link>
          <div className="absolute -top-4 -right-4 border-2 bg-red-600 text-white px-3 rounded-lg">
            <h1 className="text-sm lg:text-xl font-semibold">
              {cartData?.length}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
