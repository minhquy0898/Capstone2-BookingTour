import React, { useState } from "react";
import suggest_1 from "../../assets/suggest_1.png";
import Suggest from "../../Components/Suggest/Suggest";
import { FaChevronDown, FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt, FaRunning } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { MdDining } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@material-tailwind/react";

const DetailTour = () => {
  return (
    <div className="p-[60px] flex ">
      <div className=" flex-grow pr-7">
        <h1 className=" text-orange-300 text-[24px] font-semibold">
          Tour du lịch Đà Nẵng: Bãi biển Mỹ Khê 1 ngày 1 đêm
        </h1>
        <img
          className="w-full h-[400px] py-5 "
          src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
          alt=""
        />
        <div className=" border-b pb-6">
          <div className="flex ">
            <div className="flex-1 flex items-center">
              <FaLocationDot className="text-[#ccc]" />
              <h1>Hà Tĩnh</h1>
            </div>
            <div className="flex-1 flex items-center">
              <FaRunning className="text-[#ccc]" />
              <h1>5 ngày</h1>
            </div>
            <div className="">Phương tiện: xe máy</div>
          </div>
          <div className="text-orange-300 py-5">Mã tour: 11323as</div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-[#ccc]" />
            <h1>Khởi hành :Chủ nhật hàng tuần</h1>
          </div>
        </div>
        <div className="py-5">
          <h1 className="pb-5 text-orange-300">Dịch vụ kèm theo</h1>
          <div className="flex">
            <div className="flex-1 flex items-center">
              <GoCheckCircleFill className="text-orange-300" />
              <h1>Bữa ăn</h1>
            </div>
            <div className="flex-1 flex items-center">
              <MdDining className="text-orange-300" />
              <h1>Bữa ăn</h1>
            </div>
          </div>
        </div>
        <div>
          Tour du lịch Đà Nẵng: Bãi biển Mỹ Khê 1 ngày 1 đêm là chuyến hành
          trình tuyệt vời để khám phá vẻ đẹp tinh tế của thành phố Đà Nẵng và
          tận hưởng không khí biển trong lành tại bãi biển Mỹ Khê. Du khách sẽ
          có cơ hội thư giãn trên bờ biển trải dài, tận hưởng những bãi cát
          trắng mịn và nước biển trong xanh. Ngoài ra, tour cũng bao gồm thăm
          quan các điểm du lịch nổi tiếng như Cầu Rồng, Bán đảo Sơn Trà, và dạo
          chơi trên con đường ven biển Nguyễn Tất Thành. Buổi tối, du khách có
          thể thưởng thức ẩm thực địa phương tại các nhà hàng ven biển và thư
          giãn tại các resort sang trọng. Đây chắc chắn sẽ là một trải nghiệm du
          lịch đáng nhớ tại Đà Nẵng.
        </div>
        <div className="py-5">
          <h1 className="text-[#0064D2]">Địa điểm hấp dẫn nhất:</h1>
          <div className="pl-5 text-[#0064D2]">
            - Bãi biển Mỹ Khê: Địa điểm thư giãn hàng đầu với bãi cát trắng và
            nước biển trong xanh.
          </div>
          <div className="pl-5 text-[#0064D2]">
            - Bãi biển Mỹ Khê: Địa điểm thư giãn hàng đầu với bãi cát trắng và
            nước biển trong xanh.
          </div>
          <div className="pl-5 text-[#0064D2]">
            - Bãi biển Mỹ Khê: Địa điểm thư giãn hàng đầu với bãi cát trắng và
            nước biển trong xanh.
          </div>
        </div>
        <h1 className=" font-bold text-[24px]">
          Vậy thì còn chần chờ gì mà chưa đặt tour du lịch Đà Nẵng ngay hôm nay
          tại BookingTour để nhận ưu đãi cực hấp dẫn!
        </h1>
        <div className="py-10">
          <div className="flex justify-between bg-orange-300 p-2 items-center rounded-xl">
            <h1 className="text-[16px] font-medium text-white">
              Chương trình tour{" "}
            </h1>
            <FaChevronDown className="text-white" />
          </div>
          <div className="flex justify-between bg-orange-300 mt-4 p-2 items-center rounded-xl">
            <h1 className="text-[16px] font-medium text-white">
              Dịch vụ bao gồm
            </h1>
            <FaChevronDown className="text-white" />
          </div>
          <div className="flex justify-between bg-orange-300 mt-4 p-2 items-center rounded-xl">
            <h1 className="text-[16px] font-medium text-white">Nội quy</h1>
            <FaChevronDown className="text-white" />
          </div>
        </div>
        <div className="bg-[#3C669E]  flex  w-full h-[200px] p-5">
          <div className="flex-1">
            <div className="text-[24px] font-normal text-orange-300">
              890,000 VND/Người
            </div>
            <div className="text-[#959595] text-[24px] ">1,290,000 VND</div>
          </div>
          <div className="flex-1">
            <div className=" flex justify-evenly">
              <div>
                <h1 className="text-white">Khởi hành</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="bg-white rounded-xl w-[180px] " />
                </LocalizationProvider>
              </div>
              <div>
                <h1 className="text-white">Số khách</h1>
                <select className="w-[100px] h-[56px] rounded-xl" name="" id="">
                  <option value="">1</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end pt-10 pr-6">
              <button className=" text-white font-medium uppercase bg-[#FF0000] p-2 rounded-xl">
                {" "}
                Đặt tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center">
        <div className="bg-[#3C669E]   w-[300px] mt-[56px]  p-5 rounded-xl">
          <div className="flex-1">
            <div className="text-[24px] font-normal text-orange-300">
              890,000 VND/Người
            </div>
            <div className="text-[#959595] text-[24px] ">1,290,000 VND</div>
          </div>
          <div className="flex-1">
            <div className="  justify-evenly">
              <div>
                <h1 className="text-white">Khởi hành</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="bg-white rounded-xl w-[180px] " />
                </LocalizationProvider>
              </div>
              <div>
                <h1 className="text-white">Số khách</h1>
                <select
                  className=" h-[56px] w-[180px] rounded-xl"
                  name=""
                  id=""
                >
                  <option value="">1</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button className=" text-white font-medium uppercase bg-[#FF0000] mt-2 p-2 rounded-xl">
                {" "}
                Đặt tour
              </button>
            </div>
          </div>
        </div>
        <Suggest></Suggest>
      </div>
    </div>
  );
};

export default DetailTour;
