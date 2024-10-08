import React, { useRef } from "react";
import homepagebanner from "../../assets/images/homepagebanner.png";
import {
  EastOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon17 from "../../assets/icons/icon17.png";
import icon18 from "../../assets/icons/icon18.png";
import icon19 from "../../assets/icons/icon19.png";
import icon20 from "../../assets/icons/icon20.png";
import icon21 from "../../assets/icons/icon21.png";
import icon22 from "../../assets/icons/icon22.png";
import icon23 from "../../assets/icons/icon23.png";
import icon25 from "../../assets/icons/icon25.png";
import icon26 from "../../assets/icons/icon26.png";
import icon27 from "../../assets/icons/icon27.png";
import icon24 from "../../assets/icons/icon24.png";
import icon28 from "../../assets/icons/icon28.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const cate = [
    {
      name: "Domains & Hosting Solutions",
      logo: icon23,
    },
    {
      name: "IT, Software & App Solutions",
      logo: icon25,
    },
    {
      name: "Business Ready Applications & Platforms",
      logo: icon26,
    },
    {
      name: "Global Real Estate Marketplace Business",
      logo: icon24,
    },
    {
      name: "Holiday Homes & Short Terms Rentals",
      logo: icon20,
    },
    {
      name: "Luxury Cars Sales & Rentals",
      logo: icon27,
    },
    {
      name: "Travel & Hospitality Services",
      logo: icon22,
    },
    {
      name: "Steel Production Plants & Machinery Solutions",
      logo: icon17,
    },
    {
      name: "Industrial Plants & Machinery Solutions",
      logo: icon28,
    },
    {
      name: "Steel Meltshop Material Handling Solutions",
      logo: icon19,
    },
    {
      name: "eCommerce & Marketplace Solutions",
      logo: icon18,
    },
    {
      name: "Metal Scrap Recycling & Procurement Solutions",
      logo: icon21,
    },
    {
      name: "Automotive Machines",
      logo: icon1,
    },
    {
      name: "Construction and Minning Machines",
      logo: icon2,
    },
    {
      name: "Agricultural Machines",
      logo: icon3,
    },
    {
      name: "Building And Construction Machines",
      logo: icon4,
    },
    {
      name: "Industrial Machines",
      logo: icon5,
    },
    {
      name: "Medical Machines",
      logo: icon6,
    },
    {
      name: "Food Processing Machines",
      logo: icon7,
    },
    {
      name: "Energy Machines",
      logo: icon8,
    },
  ];
  return (
    <div className="Banner">
      <div
        className="pt-[100px] py-36 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${homepagebanner})` }}
      >
        <div className="container mx-auto">
          <div>
            <div className="">
              <div className="text-center">
                <div className="text-center">
                  <div className="bg-[#FFFFFF4D] px-8 py-2.5 text-white rounded flex justify-center items-center backdrop-filter backdrop:blur-xl w-fit mx-auto">
                    <p>Empowering businesses through cutting edge</p>
                  </div>
                  <h1 className="mt-6 text-5xl font-bold text-primary leading-[52px] ">
                    Technology Solutions
                  </h1>
                  <div className=" max-w-[600px] mx-auto mt-10">
                    <p className="text-heading mb-4">
                      Search Products & Verified Resources Near You.
                    </p>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter Product/Service Name"
                        className="text-[#212529] border-none w-full h-11"
                      />
                      <button className="bg-red-gradient py-2 px-4 text-white h-11">
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Link
                      to="/explore"
                      className=" w-fit text-white bg-red-gradient px-5 py-2 text-sm font-medium rounded flex items-center gap-2 group mx-auto lg:mx-0"
                    >
                      <span>Explore Now</span>
                      <span className="duration-300 group-hover:translate-x-2">
                        <EastOutlined />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[50px]">
        <div className="container mx-auto">
          <div className="px-10 relative BannerSlider">
            <button
              className="hidden md:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-50 absolute top-[60px]  z-10 -left-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
              onClick={() => previous()}
            >
              <KeyboardArrowLeftOutlined />
            </button>
            <Slider {...settings} ref={sliderRef}>
              {cate.map((e, index) => (
                <div key={index} className="px-2">
                  <div className="card relative px-2 py-4 flex items-center justify-center flex-col border-2 border-primary border-opacity-80 bg-white rounded min-h-[100px] hover:bg-[#ffd4d4] duration-300 select-none group">
                    <Link
                      to="/products"
                      className="absolute w-full h-full left-0 top-0 rounded"
                    ></Link>
                    <img src={e.logo} className="h-7 mb-2" />
                    <p className="text-text1 font-medium text-center line-clamp-2 group-hover:line-clamp-none duration-200">
                      {e.name}
                    </p>
                    {/* <p className="text-white bg-black bg-opacity-70 px-3 py-1 text-sm text-nowrap font-medium text-center opacity-0 group-hover:opacity-100 z-10 duration-300 invisible group-hover:visible absolute -bottom-8 tooltip">
                      {e.name}
                    </p> */}
                  </div>
                </div>
              ))}
            </Slider>
            <button
              className="hidden md:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-50 absolute top-[60px]  z-10 -right-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
              onClick={() => next()}
            >
              <KeyboardArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
