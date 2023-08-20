import React from "react";
import Link from "next/link";
const Booking = () => {
  return (
    <div className="md:mt-[343px]  px-3  pt-3">
      <div
        className="Main md:bg-[#F3F7FF] px-12 pb-[-34px] h-[60vh]  pt-16"
        style={{
          borderTopLeftRadius: 195,
          borderBottomLeftRadius: 195,
        }}
      >
        <div className="md:flex justify-between space-y-8 ">
          <div className="start md:w-1/4 space-y-3 ">
            <div className="Book Guide  space-y-4">
              <div className="font-bold text-2xl text-center text-[#002D83]">
                Book Guide
              </div>
              <div className="">
                I can help Generanerate ‘LI can help Generate ‘L
              </div>
            </div>
            <div className="flex items-center space-x-2  justify-center underline">
            <Link href="/SpecialDeals" className="underline">
                Book Now
              </Link>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="45"
                viewBox="0 0 58 45"
                fill="none"
              >
                <path
                  d="M56.8896 24.7486C58.0459 23.5922 58.0459 21.7174 56.8896 20.561L38.0453 1.71673C36.8889 0.560354 35.0141 0.560354 33.8577 1.71673C32.7013 2.87311 32.7013 4.74796 33.8577 5.90434L50.6081 22.6548L33.8577 39.4052C32.7013 40.5616 32.7013 42.4365 33.8577 43.5928C35.0141 44.7492 36.8889 44.7492 38.0453 43.5928L56.8896 24.7486ZM0.015625 25.6159H54.7958V19.6937H0.015625V25.6159Z"
                  fill="#0D60FE"
                />
              </svg>
            </div>
            <div className="text-center  ">
              <div className="font-bold text-2xl  text-[#002D83]">
                Book Equipment
              </div>
              <div className="">
                I can help Generanerate ‘LI can help Generate ‘L
              </div>
            </div>
            <div className=" font-bold  text-[#002D83] flex items-center justify-center space-x-2">
              <Link href="/SpecialDeals" className="underline">
                Book Now
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="45"
                viewBox="0 0 58 45"
                fill="none"
              >
                <path
                  d="M56.8896 24.7486C58.0459 23.5922 58.0459 21.7174 56.8896 20.561L38.0453 1.71673C36.8889 0.560354 35.0141 0.560354 33.8577 1.71673C32.7013 2.87311 32.7013 4.74796 33.8577 5.90434L50.6081 22.6548L33.8577 39.4052C32.7013 40.5616 32.7013 42.4365 33.8577 43.5928C35.0141 44.7492 36.8889 44.7492 38.0453 43.5928L56.8896 24.7486ZM0.015625 25.6159H54.7958V19.6937H0.015625V25.6159Z"
                  fill="#0D60FE"
                />
              </svg>
            </div>
          </div>
          <div className="middle md:h-[10vh] md:w-1/3">
            <img src="/buttonimg.png" className="md:h-[40vh]" alt="" />
          </div>
          <div className="end md:w-1/3 space-y-3 md:space-y-6 ">
            <div className="font-bold text-3xl text-[#002D83] text-center ">
              Fun for them,
              <br />
              made easy for you
            </div>
            <div className="text-center">
              I can help Generate ‘Lorem ipsum’ to fill your text layers Select
              all the text layers you want to generate ‘Lorem ipsum then click
              ‘I can help Generate ‘Lorem ipsum’ to fill your text layers with.
              Select all the text layers you want to generate ‘Lorem ipsum ’ for
              then click ‘
            </div>
          </div>
        </div>
        <div className="flex   md:mb-12   md:mt-[-134px] justify-end">
          <div className="Adven1 text-[200px]">Trip</div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
