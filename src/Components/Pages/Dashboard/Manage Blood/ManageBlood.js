import React from 'react';

const ManageBlood = ({ index, blood }) => {
  return (
    <tr className="font-bold text-xl">
      <th>{index}</th>
      <td>
        <img className="w-24 h-24" src={blood?.img} alt="" />
      </td>
      <td>{blood?.name}</td>
      <td>{blood?.price}</td>
      <td>{blood?.quantity}</td>
      <td>
        <button className="btn btn-secondary btn-sm text-white pt-1 pic-style">
          Increase
        </button>
      </td>
      <td>
        <button className="btn btn-primary btn-sm text-white pt-1 pic-style">
          Decrease
        </button>
      </td>
    </tr>
  );
};

export default ManageBlood;
