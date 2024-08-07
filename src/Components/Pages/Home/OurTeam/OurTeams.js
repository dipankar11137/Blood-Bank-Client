import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import help from "../../../../Images/blood/blood.png";
import img6 from '../../../../Images/Team/img-6.jpg';
import img1 from '../../../../Images/Team/img1.jpg';
import img2 from '../../../../Images/Team/img2.jpg';
import img3 from '../../../../Images/Team/img3.jpg';
import img4 from '../../../../Images/Team/img4.jpg';
import img5 from '../../../../Images/Team/img5.jpg';
import img7 from '../../../../Images/Team/img7.jpg';
import img8 from '../../../../Images/Team/img8.jpg';

const OurTeams = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <div className="mx-28 pb-10  mt-32">
      <div className="flex justify-center">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="h-40"
          src={help}
          alt=""
        />
      </div>

      <h1 className="text-4xl font-bold my-10 ml-10">Our Teams</h1>
      <div className=" pl-5 rounded-lg ">
        <Carousel className="rounded-lg pl-3" responsive={responsive}>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://www.pngmart.com/files/22/Elon-Musk-PNG-Free-Download.png"
                src={img1}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">CEO</h2>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://www.pngall.com/wp-content/uploads/2016/04/Mark-Zuckerberg-PNG-Clipart.gif"
                src={img2}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://www.pngplay.com/wp-content/uploads/9/Jeff-Bezos-PNG-Images-HD.png"
                src={img3}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://clipart.info/images/ccovers/1503498239Mukesh%20Ambani%20Png%20Transparent.png"
                src={img4}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/11/20/2354526-15w-522265866.png?itok=zj68FRwP"
                src={img5}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKDdV-tFcLEN-FzjVN1InP5MAtGB1KhU7dA&usqp=CAU"
                src={img6}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryCn5-RCNaZHjsXqYcjTfEZU-qynqav9aZA&usqp=CAU"
                src={img7}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                // src="https://www.mancity.com/meta/media/233jlh2j/microsoftteams-image-127.png?width=600"
                src={img8}
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="card w-52 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg"
          >
            <figure>
              <img
                className="w-full  pic-style rounded-lg h-[200px]"
                src="https://cdn-headshots.theathletic.com/soccer/TX7pFeb0aiHzuvjI_400x400.png"
                alt="ac"
              />
            </figure>
            <div className="pb-2 px-2 mt-5">
              <h2 className="text-center text-xl font-semibold">Employee</h2>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeams;
