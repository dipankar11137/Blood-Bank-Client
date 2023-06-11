import React from "react";
import "../../CSS/PicStyle.css";

const Blood = ({ blood, handleBook, role, handleFree }) => {
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="card card-compact w-96 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-2xl hover:bg-lime-100"
    >
      <figure>
        <img
          className="pic-style w-76 h-72 mt-5"
          src={blood?.img}
          alt="blood"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">
          Blood Group : {blood?.name}
        </h2>
        <p className="text-xl font-semibold">Quantity : {blood?.quantity}</p>
        <p className="text-xl font-semibold mb-3">Price : ${blood?.price}</p>
        {role ? (
          <div className="card-actions justify-between">
            <button
              onClick={() => handleFree(blood?._id)}
              className="btn btn-secondary text-white text-xl pic-style"
            >
              Free 1 Bug
            </button>
            <button
              onClick={() => handleBook(blood?._id)}
              className="btn btn-primary text-white text-xl pic-style"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <div className="card-actions justify-end">
            <button
              onClick={() => handleBook(blood?._id)}
              className="btn btn-primary text-white text-xl pic-style"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blood;
