import React from "react";

const Retrangle = () => {
  return (
    <div>
      <div className="main px-3 mt-32 ">
        <div className="Rectangle4 w-[100vw] h-[40vh] md:h-[474px] bg-[#3a71d732] rounded-tl-[400px] rounded-bl-[400px]">
          <div className="flex justify-between  pt-12">
            <div className="md:py-3 flex items-center justify-between">
              <div className="Right items-center  pl-12 ">
                <div className="text-[#0D60FE] md:text-5xl font-semibold">
                  Popular Destinations
                </div>
                <div className="text-[#0D60FE]   md:text-3xl">You Can Travels</div>
              </div>
              <div className="Left text-[6px] md:text-xl w-1/3  md:w-1/2 ">
                I can help Generate ‘Lorem ipsum’ to fill your text layers with.
                Select all the text layers you want to generate ‘Lorem ipsum ’
                for then click ‘
              </div>
            </div>
          </div>
          <div className="img flex absolute  items-center   pt-0">
            <div className="Adven1 text-[50px]   md:text-[130px]">Distitation</div>
          </div>
          <div className="line-img px-6  absolute    mb:w-[70vw] mb-[-90px]  md:mb-[-123px]  xl:mb-[-123px] items-center justify-between flex">
            <img className="w-1/4 h-1/5" src="/img1.png" alt="" />
            <img className="w-1/4 h-1/5" src="/img2.png" alt="" />
            <img className="w-1/4 h-1/5" src="/img3.png" alt="" />
          </div>
        </div>
        <div className="w-[100vw] flex justify-center space-x-2 items-center pt-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="7.52632" cy="7.52632" r="7.52632" transform="matrix(1 0 0 -1 0 15.0527)" fill="#D9D9D9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="7.52632" cy="7.52632" r="7.52632" transform="matrix(1 0 0 -1 0 15.0527)" fill="#D9D9D9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="7.52632" cy="7.52632" r="7.52632" transform="matrix(1 0 0 -1 0 15.0527)" fill="#D9D9D9"/>
</svg>
        </div>
      </div>
    </div>
  );
};

export default Retrangle;
