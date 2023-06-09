import React, { useEffect, useState } from 'react';
import ManageBlood from './ManageBlood';

const ManageBloods = () => {
  const [bloods, setBloods] = useState([]);
  const [singleBlood, setSingleBlood] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/bloods')
      .then(res => res.json())
      .then(data => setBloods(data));
  }, [bloods]);
  const handleEdit = id => {
    fetch(`http://localhost:5000/blood/${id}`)
      .then(res => res.json())
      .then(data => setSingleBlood(data));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-xl">Index</th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Increase Quantity</th>
              <th className="text-xl">Decrease</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bloods.map((blood, index) => (
              <ManageBlood
                key={blood._id}
                blood={blood}
                index={index + 1}
                handleEdit={handleEdit}
                singleBlood={singleBlood}
              ></ManageBlood>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBloods;
