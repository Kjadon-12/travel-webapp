import React from "react";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import DateRange from "./DateRange";
import Traveller from "./Traveller";
import { TbArrowsExchange2 } from "react-icons/tb";

const SearchEngine = () => {
  
  return (
    <div className="relative w-[85vw] mx-auto my-14">
      <form>
        {/* <div className="flex justify-center  h-full w-full "> */}
        <div className="flex gap-x-6 mb-2 items-center">
          <div className="flex items-center gap-x-2">
            <label>One way</label>
            <input type="radio" name="tripType"></input>
          </div>
          <div className="flex items-center gap-x-2">
            {" "}
            <label>Round way</label>{" "}
            <input type="radio" name="tripType"></input>
          </div>
          <div className="flex items-center gap-x-2">
            <label>Multi city</label>
            <input type="radio" name="tripType"></input>
          </div>
        </div>
        <div className="border-[1px] p-3   border-gray-400  h-28 rounded-lg">
          <div className="flex w-full justify-between items-center h-full">
            <FromInput />
            <TbArrowsExchange2 className="text-5xl cursor-pointer bg-orange-200 rounded-full p-2 text-gray-800" />
            <ToInput />
            <DateRange />
            <Traveller />
          </div>
        </div>
        {/* </div> */}
        <div className="flex justify-center mt-7">
          {" "}
          <button className="uppercase text-white bg-orange-500 py-2 px-4 rounded-full font-semibold">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchEngine;
