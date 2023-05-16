import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <div className="">
      <div className="mx-6 p-1 rounded-2xl text-black">
        <Slider {...settings}>
          <div div className=" bg-blue-50 rounded-lg">
            <div className="grid  grid-cols-3  gap-x-3">
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[600px]"
                  src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-7xl font-extrabold text-center">
                  If you <br /> want to help people <br /> Donate{" "}
                  <span className="text-red-600 uppercase">Blood</span>
                </h1>
              </div>
            </div>
          </div>
          <div div className=" bg-blue-50 rounded-lg">
            <div className="grid  grid-cols-3  gap-x-3">
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[600px]"
                  src="https://static.vecteezy.com/system/resources/previews/008/191/708/original/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-8xl font-extrabold text-center">
                  Donate <span className="text-red-600">Blood</span> And Save
                  Lives
                </h1>
              </div>
            </div>
          </div>
          <div div className=" bg-blue-50 rounded-lg">
            <div className="grid  grid-cols-3  gap-x-3">
              <div className="col-span-2">
                <img
                  className=" rounded-l-2xl w-full h-[600px]"
                  src="https://images.onlymyhealth.com/imported/images/2022/June/14_Jun_2022/Main_blooddonationmyths.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-7xl font-extrabold text-center">
                  Donate <span className="text-red-600">Blood</span> Make A
                  Difference <br />{" "}
                  <span className="text-green-700">Save A Life</span>
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
