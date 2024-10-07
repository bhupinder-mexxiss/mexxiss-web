import React from "react";
import img from "../assets/images/underConstruct.png";
import img2 from "../assets/images/underConstruct2.png";

const UnderConstruct = () => {
  return (
    <div className="py-0 bg-white">
        {/* <img src={img2} className="h-[600px] mx-auto" /> */}
      <div className="container mx-auto">
        <div className="flex items-center gap-10 justify-center max-w-[1080px] mx-auto">
          <div className="">
            {/* <p className="text-6xl text-primary font-bold">Oops!</p> */}
            <p className="text-[40px] word- text-text1 font-bold mt-8 uppercase">
              <span className="text-primary">Website</span> is Under <br />{" "}
              <span className="text-5xl">Construction</span>
            </p>
            <button className="rounded text-xl text-white font-medium mt-8 uppercase bg-red-gradient px-4 py-2">
              Coming Soon
            </button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruct;
