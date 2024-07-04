import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageDonateBlood from './ManageDonateBlood';

const ManageDonateBloods = () => {
  const [mBloods, setMBloods] = useState([]);
  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/donateBlood`)
      .then(res => res.json())
      .then(data => setMBloods(data));
  }, [mBloods]);
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `https://interective-dashboard-server.onrender.com/donateBlood/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = mBloods.filter(product => product._id !== id);
          setMBloods(remaining);
          toast.success('Successfully Delete');
        });
    }
  };
  const handleAccept = id => {
    const updateDelivered = { accept: true };
    fetch(
      `https://interective-dashboard-server.onrender.com/donateBloodId/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateDelivered),
      }
    )
      .then(res => res.json())
      .then(data => {
        toast.success('Accepted ');
      });
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
              <th className="text-xl">Age</th>
              <th className="text-xl">Weight</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Time</th>
              <th className="text-xl">Phone</th>
              <th className="text-xl">Address</th>
              <th className="text-xl">Accept</th>
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {mBloods.map((mBlood, index) => (
              <ManageDonateBlood
                key={mBlood._id}
                mBlood={mBlood}
                index={index + 1}
                handleDelete={handleDelete}
                handleAccept={handleAccept}
              ></ManageDonateBlood>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDonateBloods;
