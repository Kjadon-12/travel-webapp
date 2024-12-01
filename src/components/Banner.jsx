"use client";
import React, { useState } from "react";
import { lusitana } from "@/app/fonts/font";
import SearchEngine from "./SearchEngine";
import SearchEngineHotels from "./SearchEngineHotels";
import { RiHotelFill } from "react-icons/ri";
import { MdHotel } from "react-icons/md";
import { MdOutlineFlightTakeoff } from "react-icons/md";


const Banner = () => {
  const [formType, setFormType] = useState("flights");
  return (
    <div
      className={`bg-[url('../images/homeBanner1.webp')] h-[73vh] flex shadow-2xl justify-center items-center w-full  ${lusitana.className} `}
    >
      <div className=" h-[40%]  absolute  w-[92%] bg-white rounded-xl">
        <div className="w-[40%] h-[20%] relative mx-auto rounded-full flex md:justify-between justify-center ps:4 md:px-4 items-center relative m-auto -mt-8 bg-orange-100 shadow-lg">
          <div
            className={`font-semibold cursor-pointer group md:text-lg w-[50%] px-5 h-[75%] gap-x-2 flex justify-center items-center ${
              formType === "hotels" && "md:flex hidden "
            }  ${
              formType === "flights"
                ? "text-orange-200 bg-orange-500 rounded-full bg-[length:200%_100%] bg-[position:100%_0] transition-background-position duration-300"
                : "text-gray-600"
            }`}
            onClick={() => setFormType("flights")}
          >
            Flights <MdOutlineFlightTakeoff className="group-hover:animate-wiggle" /> 
          </div>
          <div
            className={`font-semibold cursor-pointer group md:text-lg w-[50%] px-5 h-[75%] gap-x-2 flex justify-center items-center ${
              formType === "flights" && "md:flex hidden"
            }  ${
              formType === "hotels"
                ? "text-orange-200  bg-orange-500 rounded-full bg-[length:200%_100%] bg-[position:0%_0] transition-background-position duration-300"
                : "text-gray-600 "
            }`}
            onClick={() => setFormType("hotels")}
          >
            {" "}
            Hotels <RiHotelFill  className={` ${formType === "flights" ? "block group-hover:animate-pulse" : "hidden"}  `}/> <MdHotel className={` ${formType === "hotels" ? "block group-hover:animate-bounce" : "hidden"}`} />
          </div>
        </div>
        {formType === "flights" ? (
          <SearchEngine />
        ) : (
          formType === "hotels" && <SearchEngineHotels />
        )}
      </div>
    </div>
  );
};

export default Banner;
