import React from 'react';

const MyBooking = ({ buy, index, handleRemove, handlePayment }) => {
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
        {buy?.status === 'Free' ? (
          <h1 className="font-extrabold text-blue-600 text-xl"> Free</h1>
        ) : (
          <>
            {' '}
            {buy?.payment ? (
              <h1 className="font-extrabold text-orange-600 text-xl">Paid</h1>
            ) : (
              <button
                onClick={() => handlePayment(buy?._id)}
                className="btn btn-secondary  btn-sm text-white"
              >
                Payment
              </button>
            )}
          </>
        )}
      </td>
      <td>
        {' '}
        <button
          onClick={() => handleRemove(buy?._id)}
          className="btn btn-primary  btn-sm text-white"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;
