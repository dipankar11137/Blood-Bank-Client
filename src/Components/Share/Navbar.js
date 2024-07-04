import { signOut } from "firebase/auth";
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiDonateBlood } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  // const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');
  const logout = () => {
    signOut(auth);
  };

  // useEffect(() => {
  //   fetch(`https://boxberry.onrender.com/carBooking/${email}`)
  //     .then(res => res.json())
  //     .then(data => setBooking(data));
  // }, [booking, email]);

  // const handleBook = () => {
  //   navigate("/myOrders");
  // };

  const menuItem = (
    <>
      <li
        onClick={() => setSelectedButton('Button 1')}
        className={
          selectedButton === 'Button 1'
            ? 'bg-primary text-white rounded-lg'
            : ''
        }
      >
        <Link to="/" className="   ">
          Home
        </Link>
      </li>

      {user && (
        <>
          <li
            onClick={() => setSelectedButton('Button 7')}
            className={
              selectedButton === 'Button 7'
                ? 'bg-primary text-white rounded-lg'
                : ''
            }
          >
            <Link to="/dashboard" className="   ">
              Dashboard
            </Link>
          </li>

          <li
            onClick={() => setSelectedButton('Button 5')}
            className={
              selectedButton === 'Button 5'
                ? 'bg-primary text-white rounded-lg'
                : ''
            }
          >
            <Link to="/about" className="   ">
              About Us
            </Link>
          </li>
        </>
      )}

      <li>
        {user ? (
          <p onClick={logout}>Sign Out</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div
      className="px-20 bg-accent"
      // style={{
      //   background: `url("https://wallpapers.com/images/hd/blood-aesthetic-1920-x-1080-z8u95yfxdo0uopvb.jpg")`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <div class="navbar px-12 mx-auto text-white shadow-2xl  rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-amber-400 rounded-box w-72  text-neutral"
            >
              {menuItem}
            </ul>
          </div>
          <Link to={'/'}>
            <div
              onClick={() => setSelectedButton('Button 1')}
              className="btn btn-ghost text-white font-semibold text-2xl  uppercase"
            >
              {' '}
              <BiDonateBlood
                className="mr-4 text-primary bg-white rounded-full animate-bounce"
                size={30}
              />{' '}
              Blood Bank{' '}
            </div>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0  hover:bg-se">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
