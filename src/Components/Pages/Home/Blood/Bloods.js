import React, { useEffect, useState } from 'react';
import Blood from './Blood';

const Bloods = () => {
  const [bloods, setBloods] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bloods')
      .then(res => res.json())
      .then(data => setBloods(data));
  }, [bloods]);
  return (
    <div className="mt-20 mx-20 bg-slate-50 rounded-xl">
      <h1 className="ml-5 text-7xl font-bold mb-5 pt-5">
        Our Available Bloods
      </h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 p-3">
        {bloods.map(blood => (
          <Blood key={blood._id} blood={blood}></Blood>
        ))}
      </div>
    </div>
  );
};

export default Bloods;
