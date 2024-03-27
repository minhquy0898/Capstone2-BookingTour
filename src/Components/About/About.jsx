import { FaBusAlt } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { FaTicketAlt } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";


const About = () => {
  return (
    <>
        <div className=" mt-6 flex items-center justify-center">
            <div className="w-[1070px] h-[304px]">
                <div className="flex items-center justify-center">
                        <p className=" pt-10 text-2xl font-medium">Hệ thống kết nối du khách và các tour</p>
                </div>
                <div className=" mt-8 flex items-center justify-between ">
                    <div className=" h-[110px] w-[240px] border border-solid border-gray-200 rounded-xl flex justify-center">
                        <FaBusAlt className="mt-3 w-[25px] h-[25px] text-[#59CA00]"/>
                        <p className=" ml-3 text-sm pt-7 w-[177px] h-[51px]">Hàng trăm tour được tạo mỗi ngày và được tạo bởi các công ty uy tín</p>
                    </div>
                    <div className=" h-[110px] w-[240px] border border-solid border-gray-200 rounded-xl flex justify-center">
                        <FaTicketAlt className="mt-3 w-[25px] h-[25px] text-[#FF0000]"/>
                        <p className=" ml-3 text-sm pt-7 w-[177px] h-[51px]">Đặt tour nhanh và thông tin chi tiết</p>
                    </div>
                    <div className=" h-[110px] w-[240px] border border-solid border-gray-200 rounded-xl flex justify-center">
                        <ImCheckboxChecked className="mt-3 w-[25px] h-[25px] text-[#CC00FF] rounded-full"/>
                        <p className=" ml-3 text-sm pt-7 w-[177px] h-[51px]">Hoàn ngay 150% nếu không có vé tour, mang đến hành trình du lịch trọn vẹn</p>
                    </div>
                    <div className=" h-[110px] w-[240px] border border-solid border-gray-200 rounded-xl flex justify-center">
                        <IoBookmarks className="mt-3 w-[25px] h-[25px] text-[#DFE307]"/>
                        <p className=" ml-3 text-sm pt-7 w-[177px] h-[51px]">Hàng trăm ưu đãi hấp dẫn tại chỉ có  ở BookingTour</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;
