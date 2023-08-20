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
            <div className=" text-5xl font-extrabold md:text-[70px]">Explore</div>
            <div className=" text-5xl font-extrabold md:text-[70px]">The World</div>
            <div className=" text-5xl font-extrabold  md:text-[70px] text-[#0D60FE]">
              Tridventure
            </div>
          </div>
          <div className="left-1 w-[60vw] text-[14px] md:text-3xl ">
            I can help Generate ‘Lorem ipsum’ to fill your text layers with
            dummy text. Select all the text layers you want to generate ‘Lorem
            ipsum’ for then click ‘ Generate’ it will generate for each layer
            uniquely.
          </div>
          
        </div>
        {/* <div className="Right container">
          <img src="/dd.png" alt="" srcset="" />
        </div> */}
<div className="Right container">
  <img 
    src="/dd.png" 
    alt="" 
    srcset="" 
    className="h-40vh w-30vw sm:h-50vh sm:w-40vw md:h-60vh md:w-50vw lg:h-70vh lg:w-60vw xl:h-80vh xl:w-70vw"
  />
</div>

        </div>
    
        <div className=""></div>
        <Slider/>
      </div>
    </div>
  );
};

export default Middle;
