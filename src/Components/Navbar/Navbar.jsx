import { FaBusAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <div className=" flex items-center justify-center ml-8 w-full h-[50px]">
            <div className=" flex items-center ml-8">
                <TbDiscountCheckFilled className=" w-5 h-5 m-2 text-blue-600"/>
                <p className=" text-gray-600 cursor-pointer">Khuyến mãi </p>
            </div>
            <div className=" flex items-center ml-8">
                <FaBusAlt className=" w-5 h-5 m-2 text-blue-600"/>
                <p className=" text-gray-600 cursor-pointer">Tour của tôi</p>
            </div>
            <div className=" flex items-center ml-8">
                <RiCustomerService2Fill className=" w-5 h-5 m-2 text-blue-600"/>
                <p className=" text-gray-600 cursor-pointer">Trung tâm hỗ trợ</p>
            </div>
            <div className=" flex items-center ml-8">
                <FaHandshake className=" w-5 h-5 m-2 text-blue-600"/>
                <p className="text-gray-600  cursor-pointer">Hợp tác với chúng tôi</p>
            </div>
            <div className=" flex items-center ml-8">
                <FaUserCircle className=" w-5 h-5 m-2 text-gray-600"/>
                <p className="text-gray-600  cursor-pointer">Đăng nhập</p>
            </div>
            <div className=" flex items-center ml-8">
                <p className=" text-blue-600 cursor-pointer">Đăng ký</p>
            </div>
        </div>
        <div className=" h-[60px] w-full bg-[#FFB61A]">
            <img className=" h-[60px] pl-72" src={logo}></img>
        </div>
    </>
  )
}

export default Navbar