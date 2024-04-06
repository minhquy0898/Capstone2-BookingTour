import React from "react";
import { FaHistory, FaMapMarked, FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import img from "../../assets/hot_topic.png";
import paypal from "../../assets/Paypal.png";
const PaymentForm = () => {
  return (
    <div className=" px-20 mt-5">
      <div className="flex">
        <h1 className="flex-[35%] font-bold text-2xl">Thông tin đặt tour</h1>
        {/* <h1 className="flex-[65%] font-bold text-2xl">Thông tin liên hệ</h1> */}
      </div>
      <div className="flex">
        <div className="flex-[35%]">
          <div className="border border-solid border-gray-400 bg-white mr-10 h-[368px] rounded-2xl shadow-xl my-10">
            <div className=" flex flex-col mx-5">
              <div className=" flex justify-center items-center mt-5 mx-2">
                <img className="w-[120px] mr-3 rounded-md" src={img}></img>
                <div className=" flex flex-col">
                  <p className=" text-md font-semibold">
                    Tour du lịch Đà Nẵng: Bãi biển Mỹ Khê 1 ngày 1 đêm
                  </p>
                </div>
              </div>
              <div className=" shadow-md pb-10">
                <div className=" flex flex-col items-start mt-7 mx-2 ">
                  <div className=" flex items-center justify-center cursor-pointer">
                    <p className=" text-base font-medium">Mã tour:</p>
                  </div>
                  <div className=" flex items-center justify-center mt-5 cursor-pointer">
                    <p className=" text-base font-medium">Lịch sử:</p>
                  </div>
                  <div className=" flex items-center justify-center mt-5 cursor-pointer">
                    <p className=" text-base font-medium">Tài khoản:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 mx-7">
              <div className=" flex items-center justify-center cursor-pointer">
                <p className=" text-base font-medium">Tổng tiền:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[65%]  ">
          {/* <form className=" shadow-md rounded  pt-6 pb-14 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Họ và Tên
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Địa chỉ
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="123 Main St, New York, NY"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cardNumber"
              >
                Số điện thoại
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardNumber"
                type="text"
                placeholder="**** **** **** ****"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiryDate"
              >
                Ngày sinh
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <button
              className=" bg-orange-400 float-right hover:bg-slate-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Tiếp tục
            </button>
          </form> */}
          <div className="flex ">
            <div className="flex-[60%] pr-4">
              <div className=" flex justify-center">
                Thanh toán trong vòng 20:00
              </div>
              <div className="py-10">Thanh toán qua thẻ tín dụng quốc tế </div>
              <div className="flex justify-center">
                <img className="w-[100px] pb-4" src={paypal} alt="" />
              </div>
              <div className="flex">
                <input type="checkbox" />
                <div className="pl-3">Tôi muốn xuất hóa đơn</div>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <div className="pl-3">
                  Tôi đồng ý với các điều khoản đặt hàng của BookingTour
                </div>
              </div>
              <div className="w-full rounded-md bg-[#0064D2] text-white py-2 my-4 flex justify-center">
                Xác nhận
              </div>
            </div>
            <div className="flex-[40%] bg-[#FFB61A] h-[408px] rounded-tr-xl rounded-br-xl">
              <div className=" text-white pl-7 py-3  text-[18px]">
                Phương thức thanh toán
              </div>
              <div className=" bg-white text-black font-medium pl-7 py-3  text-[18px]">
                Thẻ tín dụng quốc tế
              </div>
              <div className=" text-white pl-7 py-3  text-[18px]">
                Phương thức thanh toán
              </div>
              <div className=" text-white pl-7 py-3  text-[18px]">
                Phương thức thanh toán
              </div>
              <div className=" text-white pl-7 py-3  text-[18px]">
                Phương thức thanh toán
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
