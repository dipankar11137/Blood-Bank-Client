import React from "react";
import "../../CSS/PicStyle.css";

const Blood = ({ blood, handleBook, role, handleFree, freeBlood }) => {
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="card card-compact  bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-2xl hover:bg-lime-100"
    >
      <figure>
        <img
          className="pic-style w-full h-48 mt-5"
          src={blood?.img}
          alt="blood"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">
          Blood Group : {blood?.name}
        </h2>
        <p className=" font-semibold">Quantity : {blood?.quantity}</p>
        <p className=" font-semibold mb-3">Price : ${blood?.price}</p>
        {role ? (
          <div className="card-actions justify-between">
            <>
              {freeBlood ? (
                <button
                  disabled
                  onClick={() => handleFree(blood?._id)}
                  className="btn btn-secondary text-white  pic-style"
                >
                  Free 1 Bug
                </button>
              ) : (
                <button
                  onClick={() => handleFree(blood?._id)}
                  className="btn btn-secondary text-white text-xl pic-style"
                >
                  Free 1 Bug
                </button>
              )}
            </>
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
