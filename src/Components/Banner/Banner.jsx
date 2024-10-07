import React from "react";
import homepagebanner from "../../assets/images/homepagebanner.png";
import { EastOutlined } from "@mui/icons-material";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="pt-[120px] py-36 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${homepagebanner})` }}
      >
        <div className="container mx-auto">
          <div>
            <div className="lg:grid grid-cols-2 items-center">
              <div className="text-center lg:text-start">
                <div className=" lg:w-[80%] xl:w-[70%] 3xl:max-w-[60%]">
                  <p className="text-heading lg:hidden text-center mb-4">
                    Search products and find verified sellers near you
                  </p>
                  <div className="bg-[#FFFFFF4D] px-8 py-3 text-white rounded flex justify-center items-center backdrop-filter backdrop:blur-xl w-fit mx-auto lg:w-full">
                    <p>Empowering Industry Through Cutting-Edge</p>
                  </div>
                  <h1 className="my-6 text-5xl font-bold text-heading leading-[52px]">
                    Machinery Solutions
                  </h1>
                  <Link
                    to="/explore"
                    className="w-fit text-white bg-red-gradient px-5 py-2 text-sm font-medium rounded flex items-center gap-2 group mx-auto lg:mx-0"
                  >
                    <span>Explore Now</span>{" "}
                    <span className="duration-300 group-hover:translate-x-2">
                      <EastOutlined />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-heading mb-4">
                  Search products and find verified sellers near you
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
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-9 gap-5">
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon1} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Automotive Mach...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon2} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Construction an...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon3} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Agricultural Ma...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon4} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Building And Co...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon5} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Industrial Mach...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon6} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Medical Machine...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon7} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Food Processing...
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon8} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                Energy Machines
              </p>
            </div>
            <div className="card relative p-4 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded min-h-[100px]">
              <Link to="/products" className="absolute w-full h-full left-0 top-0 rounded"></Link>
              <img src={icon9} className="h-7 mb-2" />
              <p className="text-text1 font-medium text-center">
                View all Categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
