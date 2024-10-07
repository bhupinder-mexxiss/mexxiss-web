import React from "react";
import img from "../../assets/images/footer-email.png";

const Subscribe = () => {
  return (
    <div
      className="bg-cover bg-no-repeat py-24"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 58%), rgb(0 0 0 / 66%)),url(${img})`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 max-w-[1080px] mx-auto items-center">
          <div>
            <div className="max-w-[400px]">
              <h4 className="text-primary text-3xl font-semibold mb-6">
                Committed to Value, Committed to you.
              </h4>
              <p className="text-heading">
                Feel free to get in touch with us anytime; we're here to answer
                your questions, address your needs, and assist you in any way we
                can.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-[#212529] border-none w-full h-11"
              />
              <button className="bg-red-gradient py-2 px-4 text-white h-11">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
