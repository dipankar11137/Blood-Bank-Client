import React from "react";

const Blood = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://www.nzblood.co.nz/assets/Column/Blood-Type-Blood-Drops-A+__ScaleMaxWidthWzcwMF0.png"
          alt="blood"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Blood Group : A+</h2>
        <p>Quantity : 10</p>
        <p>Price : 10</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Blood;
