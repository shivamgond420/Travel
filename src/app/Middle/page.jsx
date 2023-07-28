import React from "react";
import Slider from "../Sider/page";

const Middle = () => {
  return (
    <div>
      <div className="main px-6 pt-6 ">
        <div className="md:flex">
        <div className="left  flex-col space-y-4">
          <div className=" container mx-auto justify-center items-center   ">
            {" "}
            <div className="md:font-extrabold text-5xl font-bold md:text-6xl">Explore</div>
            <div className="md:font-extrabold text-5xl font-bold md:text-6xl">The World</div>
            <div className="md:font-extrabold text-5xl font-bold md:text-6xl text-[#0D60FE]">
              Tridventure
            </div>
          </div>
          <div className="left-1 md:w-1/2 text-[14px]">
            I can help Generate ‘Lorem ipsum’ to fill your text layers with
            dummy text. Select all the text layers you want to generate ‘Lorem
            ipsum’ for then click ‘ Generate’ it will generate for each layer
            uniquely.
          </div>
          
        </div>
        <div className="Right container">
          <img src="/dd.png" alt="" srcset="" />
        </div>

        </div>
    
        <div className=""></div>
        <Slider/>
      </div>
    </div>
  );
};

export default Middle;
