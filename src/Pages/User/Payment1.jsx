import React from "react";
import PaymentForm from "../../Components/PaymentForm/PaymentForm";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "../../assets/Fauget-Travel.png";
const Payment1 = () => {
  return (
    <div className="">
      <div className=" h-[80px] w-full flex items-center  bg-[#FFB61A]">
        <div className="px-20 flex items-center">
          <img className=" h-[60px]  rounded-full" src={logo}></img>
          <h1 className=" text-orange-900 font-bold text-3xl pl-3">
            Explore Nest
          </h1>
        </div>
        <div className="flex items-center pl-20">
          <div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-sky-600 m-auto">
              <h1 className="text-white font-semibold">1</h1>
            </div>
            <div className="text-sky-600 font-semibold">Điền thông tin</div>
          </div>
          <div className="w-[200px] h-0 border"></div>
          <div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white m-auto">
              <h1 className=" font-semibold">2</h1>
            </div>
            <div className="text-sky-600 font-semibold">Thanh toán</div>
          </div>
          <div className="w-[200px] h-0 border"></div>
          <div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white m-auto">
              <h1 className=" font-semibold">3</h1>
            </div>
            <div className="text-sky-600 font-semibold">Xác nhận</div>
          </div>
        </div>
      </div>
      <PaymentForm />
    </div>
  );
};

export default Payment1;
