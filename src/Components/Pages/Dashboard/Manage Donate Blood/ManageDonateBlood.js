import React from 'react';

const ManageDonateBlood = ({ mBlood, index, handleDelete }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{mBlood?.name}</td>
      <td>{mBlood?.studentId}</td>
      <td>{mBlood?.bloodGroup}</td>
      <td>{mBlood?.age}</td>
      <td>{mBlood?.weight}</td>
      <td>{mBlood?.date}</td>
      <td>{mBlood?.time}</td>
      <td>{mBlood?.phone}</td>
      <td>{mBlood?.address}</td>

      <td>
        {' '}
        <button
          // onClick={() => handleAccept(mBlood?._id)}
          className="btn btn-secondary  btn-sm text-white pt-1 pic-style"
        >
          Accept
        </button>
      </td>
      <td>
        {' '}
        <button
          onClick={() => handleDelete(mBlood?._id)}
          className="btn btn-primary  btn-sm text-white pic-style"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageDonateBlood;
