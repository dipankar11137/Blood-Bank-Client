import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Share/Footer';

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('Button 1');
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
            <ul className="menu p-4 overflow-y-auto w-64 bg-green-900  text-white pt-20 ">
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
                  className="font-bold  text-xl hover:text-green-300"
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
                  className="font-bold  text-xl hover:text-green-300"
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
                  className="font-bold  text-xl hover:text-green-300"
                >
                  Manage Buy
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
