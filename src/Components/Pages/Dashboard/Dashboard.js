import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../../Share/Footer';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [selectedButton, setSelectedButton] = useState('');
  return (
    <div className="bg-gradient-to-r from-red-300 to-green-300">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-52 bg-green-900  text-white pt-20 ">
              <li
                onClick={() => setSelectedButton('Button 1')}
                className={
                  selectedButton === 'Button 1'
                    ? 'bg-primary text-white rounded-lg'
                    : ''
                }
              >
                <Link
                  to="/dashboard"
                  className="  hover:text-green-300"
                >
                  Member
                </Link>
              </li>
              {user?.email === 'abc@def.com' && (
                <>
                  <li
                    onClick={() => setSelectedButton('Button 0')}
                    className={
                      selectedButton === 'Button 0'
                        ? 'bg-primary text-white rounded-lg'
                        : ''
                    }
                  >
                    <Link
                      to="/dashboard/manageMember"
                      className=" hover:text-green-300"
                    >
                      Manage Member
                    </Link>
                  </li>
                  <li
                    onClick={() => setSelectedButton('Button 2')}
                    className={
                      selectedButton === 'Button 2'
                        ? 'bg-primary text-white rounded-lg mt-3'
                        : 'mt-3'
                    }
                  >
                    <Link
                      to="/dashboard/manageBlood"
                      className=" hover:text-green-300"
                    >
                      Manage Blood
                    </Link>
                  </li>
                  <li
                    onClick={() => setSelectedButton('Button 3')}
                    className={
                      selectedButton === 'Button 3'
                        ? 'bg-primary text-white rounded-lg mt-3'
                        : 'mt-3'
                    }
                  >
                    <Link
                      to="/dashboard/manageBuy"
                      className=" hover:text-green-300"
                    >
                      Manage Buy
                    </Link>
                  </li>
                  <li
                    onClick={() => setSelectedButton('Button 9')}
                    className={
                      selectedButton === 'Button 9'
                        ? 'bg-primary text-white rounded-lg mt-3'
                        : 'mt-3'
                    }
                  >
                    <Link
                      to="/dashboard/manageDonateBlood"
                      className=" hover:text-green-300 "
                    >
                      Manage Donate Blood
                    </Link>
                  </li>
                </>
              )}
              <li
                onClick={() => setSelectedButton('Button 5')}
                className={
                  selectedButton === 'Button 5'
                    ? 'bg-primary text-white rounded-lg mt-3'
                    : 'mt-3'
                }
              >
                <Link
                  to="/dashboard/myBooking"
                  className=" hover:text-green-300"
                >
                  My Booking
                </Link>
              </li>

              <li
                onClick={() => setSelectedButton('Button 6')}
                className={
                  selectedButton === 'Button 6'
                    ? 'bg-primary text-white rounded-lg mt-3'
                    : 'mt-3'
                }
              >
                <Link
                  to="/dashboard/donateBlood"
                  className=" hover:text-green-300"
                >
                  Donate Blood
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
