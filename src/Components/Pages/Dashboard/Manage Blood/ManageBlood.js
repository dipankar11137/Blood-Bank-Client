import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ManageBlood = ({
  index,
  blood,
  handleRestock,
  handleEdit,
  singleBlood,
  handleDecrease,
}) => {
  return (
    <tr className="font-bold text-xl">
      <th>{index}</th>
      <td>
        <img className="w-24 h-24" src={blood?.img} alt="" />
      </td>
      <td>{blood?.name}</td>
      <td>{blood?.price}</td>
      <td>{blood?.quantity}</td>

      {/* modal start */}
      <td className="bg-rose-50">
        <label
          onClick={() => handleEdit(blood?._id)}
          for="my-modal-3"
          className="btn bg-secondary text-white  modal-button"
        >
          <FaEdit className="text-2xl" />
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-3"
              className="btn btn-primary pt-1 text-white  btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96 bg-base-100 ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleBlood.name}
                  </h1>
                  <img
                    className="mask mask-hexagon-2 "
                    src={singleBlood?.img}
                    alt=""
                  />
                  <form onSubmit={handleRestock}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500"
                    />

                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-primary pt-1 text-white  font-bold rounded-lg"
                      value="Restock"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      {/* modal end */}
      <td className="bg-rose-50">
        <label
          onClick={() => handleEdit(blood?._id)}
          for="my-modal-4"
          className="btn bg-primary btn-sm text-white  modal-button"
        >
          Decrease
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-4"
              className="btn btn-primary pt-1 text-white  btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96 bg-base-100 ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleBlood.name}
                  </h1>
                  <form onSubmit={handleDecrease}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500"
                    />

                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-primary pt-1 text-white  font-bold rounded-lg"
                      value="Decrease"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      {/* modal end */}
    </tr>
  );
};

export default ManageBlood;
