import React from "react";
import Blood from "./Blood";
import { useState } from "react";
import { useEffect } from "react";

const Bloods = () => {
  const [bloods, setBloods] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setBloods(data));
  }, []);
  return (
    <div className="mt-20 mx-20 bg-slate-50 rounded-xl">
      <h1 className="text-center text-5xl font-bold mb-5 pt-5">
        Our Available Bloods
      </h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8">
        {bloods.map((blood) => (
          <Blood key={blood._id} blood={blood}></Blood>
        ))}
      </div>
    </div>
  );
};

export default Bloods;
