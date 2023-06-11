import React from 'react';

const ManageBuy = ({ index, buy, handleDelivered, handleDelete }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{buy?.user?.name}</td>
      <td>{buy?.user?.studentId}</td>
      <td>{buy?.bloodGroup}</td>
      <td>{buy?.quantity}</td>
      <td>
        {' '}
        {buy?.status === 'Free' ? (
          <h1 className="text-xl font-bold text-blue-800">Free</h1>
        ) : (
          <>{buy?.totalPrice}</>
        )}{' '}
      </td>
      <td>{buy?.date}</td>
      <td>{buy?.phone}</td>
      <td>{buy?.address}</td>

      <td>
        {buy?.status === 'Free' ? (
          <>
            {' '}
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
          </>
        ) : (
          <>
            {' '}
            {buy?.payment ? (
              <>
                {' '}
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
              </>
            ) : (
              <h1 className="text-xl text-primary font-extrabold">Not Paid</h1>
            )}
          </>
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
