import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Blood from './Blood';

const Bloods = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const [bloods, setBloods] = useState([]);
  const [user, setUser] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    fetch('https://interective-dashboard-server.onrender.com/bloods')
      .then(res => res.json())
      .then(data => setBloods(data));
  }, [bloods]);
  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/user/${email}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [user, email]);

  const role = user[0]?.role;
  const freeBlood = user[0]?.freeBlood;
  const handleBook = id => {
    navigation(`/book/${id}`);
  };
  const handleFree = id => {
    navigation(`/freeBook/${id}`);
  };
  return (
    <div className="mt-20 mx-20 bg-slate-50 rounded-xl">
      <h1 className="ml-5 text-5xl font-bold mb-5 pt-5">
        Our Available Bloods
      </h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-x-4 gap-y-8 p-3">
        {bloods.map(blood => (
          <Blood
            key={blood._id}
            blood={blood}
            handleBook={handleBook}
            handleFree={handleFree}
            role={role}
            freeBlood={freeBlood}
          ></Blood>
        ))}
      </div>
    </div>
  );
};

export default Bloods;
