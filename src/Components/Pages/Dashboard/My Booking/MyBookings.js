import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import MyBooking from './MyBooking';

const MyBookings = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [buys, setBuys] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/buyBlood/${email}`)
      .then(res => res.json())
      .then(data => setBuys(data));
  }, [buys, email]);

  const handlePayment = id => {
    navigate(`/payment/${id}`);
  };

  const handleRemove = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/buyBlood/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = buys.filter(product => product._id !== id);
          setBuys(remaining);
          toast.success('Successfully Delete');
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-xl">Index</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Student Id</th>
              <th className="text-xl">Blood Group</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Total Price</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Phone</th>
              <th className="text-xl">Address</th>
              <th className="text-xl">Payment</th>
              <th className="text-xl">Remove</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {buys.map((buy, index) => (
              <MyBooking
                key={buy._id}
                buy={buy}
                index={index + 1}
                handleRemove={handleRemove}
                handlePayment={handlePayment}
              ></MyBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
