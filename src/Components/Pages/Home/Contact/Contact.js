import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import call from '../../../../Images/Image/call cartoon.png';



const Contact = () => {
  return (
    <div className="bg-accent mt-40 shadow-lg text-white">
      <div className=" mx-20 grid grid-cols-3 ">
        <div className="p-4 col-span-2">
          <h1 className="py-4 text-2xl font-bold">
            Can’t find your desired service? Let us know 24/6 in 16216.
          </h1>
          <div className="flex">
            {/* MOdal Open */}
            <label
              htmlFor="my-modal"
              className="buttonStyle py-2 px-8 hover:bg-primary hover:text-white text-xl rounded-xl border-4 border-primary ml-72 mt-5 cursor-pointer"
            >
              Request To Contact
            </label>

            {/* <RequestToContact /> */}
            {/* Modal End */}
            <button className="flex py-4 px-8 hover:bg-primary hover:text-white text-2xl rounded-xl border-4 border-primary ml-14 mt-5">
              <FaPhoneAlt className="mt-1 animate-bounce" />
              <span className="ml-3">16216</span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
            style={{ marginTop: '-120px' }}
            className="h-96"
            src={call}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
