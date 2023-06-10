import React from 'react';

const ManageBuy = ({ index, buy, handleDelivered, handleDelete }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{buy?.user?.name}</td>
      <td>{buy?.user?.studentId}</td>
      <td>{buy?.bloodGroup}</td>
      <td>{buy?.quantity}</td>
      <td>{buy?.totalPrice}</td>
      <td>{buy?.date}</td>
      <td>{buy?.phone}</td>
      <td>{buy?.address}</td>

      <td>
        {buy?.delivered ? (
          <button
            disabled
            onClick={() => handleDelivered(buy?._id)}
            className="btn btn-secondary  btn-sm text-white"
          >
            Delivered
          </button>
        ) : (
          <button
            onClick={() => handleDelivered(buy?._id)}
            className="btn btn-primary  btn-sm text-white"
          >
            Delivered
          </button>
        )}
      </td>
      <td>
        {' '}
        <button
          onClick={() => handleDelete(buy?._id)}
          className="btn btn-primary  btn-sm text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageBuy;