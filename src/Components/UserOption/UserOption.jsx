import avatar from "../../assets/avatar.png";
import { FaMapMarked } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

const UserOption = () => {
  return (
    <div className="border border-solid border-gray-400 bg-white w-[315px] h-[426px] rounded-2xl shadow-xl my-10">
      <div className=" flex flex-col mx-5">
        <div className=" flex justify-center items-center mt-4">
          <img className=" mr-7" src={avatar}></img>
          <div className=" flex flex-col">
            <p className=" text-sm">Dương Minh Quý</p>
            <p className=" text-xs">minhquy0898240032@gmail.com</p>
          </div>
        </div>
        <div className=" flex flex-col items-start mt-7 mx-5 ">
          <div className=" flex items-center justify-center cursor-pointer">
            <FaMapMarked className=" text-[#FFB61A] mr-4 w-[30px] h-[30px]" />
            <p className=" text-sm">Quản lí tour</p>
          </div>
          <div className=" flex items-center justify-center mt-5 cursor-pointer">
            <FaHistory className=" text-[#FFB61A] mr-4 w-[30px] h-[30px]" />
            <p className=" text-sm">Lịch sử</p>
          </div>
          <div className=" flex items-center justify-center mt-5 cursor-pointer">
            <FaUser className=" text-[#FFB61A] mr-4 w-[30px] h-[30px]" />
            <p className=" text-sm">Tài khoản</p>
          </div>
          <div className=" flex items-center justify-center mt-5 cursor-pointer">
            <IoIosLogOut className=" text-[#FFB61A] mr-4 w-[30px] h-[30px]" />
            <p className=" text-sm">Đăng xuất</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOption;
