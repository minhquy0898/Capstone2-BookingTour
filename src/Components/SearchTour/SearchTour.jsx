import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import list from "../../city_list.json";

const SearchTour = () => {
  const cities = list.map((city) => city.city);
  return (
    <>
      <div className=" mt-6 flex items-center justify-center">
        <div className="border border-solid border-gray-400 w-[1070px] h-[351px] rounded-b-lg shadow-xl">
          <div className=" bg-[#0064D2] opacity-70 w-[1070px] h-[94px] pl-6 flex items-center text-2xl text-white">
            <p>Booking Tour</p>
          </div>
          <div className="flex pl-6">
            <div>
              <div>Điểm đến</div>
              <select
                className="w-[494px] h-[42px] border border-gray-300 outline-none"
                name=""
                id=""
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="pl-14">
              <div>Điểm đến</div>
              <select
                className="w-[439px] h-[42px] border border-gray-300 outline-none"
                name=""
                id=""
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <form className=" flex flex-wrap mt-6">
            <div className=" mb-4 flex flex-col pl-6">
              <label htmlFor="departure">Số hành khách</label>
              <input
                type="text"
                className="border border-gray-300  p-2 w-[494px] flex-1 box-border"
                id="departure"
                placeholder="Nhập số lượng hành khách"
              />
            </div>
            <div className=" mb-4 flex flex-col pl-14">
              <label htmlFor="startDate">Ngày bắt đầu</label>
              <input
                type="date"
                className="border border-gray-300  p-2 w-[441px] text-gray-400"
                id="startDate"
              />
            </div>
          </form>
          <div className=" flex items-center justify-center bg-[#0064D2] rounded-xl w-[180px] h-[40px] text-white ml-[830px] cursor-pointer">
            <FaSearch className=" m-2 w-[25px] h-[25px]" />
            <p className=" text-xl font-bold">Tìm Tour</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTour;
