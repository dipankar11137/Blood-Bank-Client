import React from "react";
import "../../CSS/PicStyle.css";

const Blood = () => {
  return (
    <div
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="card card-compact w-96 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-2xl hover:bg-lime-100"
    >
      <figure>
        <img
          className="pic-style"
          src="https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png"
          alt="blood"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">Blood Group : A+</h2>
        <p className="text-xl font-semibold">Quantity : 10</p>
        <p className="text-xl font-semibold">Price : $10</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white text-xl pic-style">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blood;
