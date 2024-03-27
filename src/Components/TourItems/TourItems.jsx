import { useState } from "react";
import TourItem from "./TourItem";
import ReactPaginate from "react-paginate";

const TourItems = () => {
  const tourData = [
    {
      image: "/src/assets/tour-item.png",
      title: "Tour du lịch Đà Nẵng:Bãi biển Mỹ Khê 1 ngày 1 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "890,000 vnđ",
      originalPrice: "1,290,000 vnđ",
    },
    {
      image: "/src/assets/tour-item3.png",
      title: "Tour du lich:Hà Nội nghìn năm văn hiến",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "500,000 vnđ",
      originalPrice: "700,000 vnđ",
    },
    {
      image: "/src/assets/tour-item2.jpg",
      title: "Tour du lich: Thành phố Hồ Chí Minh 2 ngày 1 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "890,000 vnđ",
      originalPrice: "1,290,000 vnđ",
    },
    {
      image: "/src/assets/tour-item1.jpg",
      title: "Tour du lich: Quy nhơn 4 ngày 3 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "3,000,000 vnđ",
      originalPrice: "5,000,000 vnđ",
    },
    {
      image: "/src/assets/tour-item1.jpg",
      title: "Tour du lich: Quy nhơn 4 ngày 3 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "3,000,000 vnđ",
      originalPrice: "5,000,000 vnđ",
    },
    {
      image: "/src/assets/tour-item2.jpg",
      title: "Tour du lich: Thành phố Hồ Chí Minh 2 ngày 1 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "890,000 vnđ",
      originalPrice: "1,290,000 vnđ",
    },
    {
      image: "/src/assets/tour-item3.png",
      title: "Tour du lich:Hà Nội nghìn năm văn hiến",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "500,000 vnđ",
      originalPrice: "700,000 vnđ",
    },
    {
      image: "/src/assets/tour-item.png",
      title: "Tour du lịch Đà Nẵng:Bãi biển Mỹ Khê 1 ngày 1 đêm",
      startLocation: "Xuất phát:Hà Tĩnh",
      price: "890,000 vnđ",
      originalPrice: "1,290,000 vnđ",
    },
    // Add more tour items as needed
  ];

  // Số lượng tour mỗi trang
  const toursPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  // Tính toán index bắt đầu và kết thúc của các tour trên trang hiện tại
  const indexOfLastTour = (currentPage + 1) * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tourData.slice(indexOfFirstTour, indexOfLastTour);

  // Hàm xử lý sự kiện khi chuyển trang
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="t-6 flex items-center justify-center flex-col">
      {currentTours.map((tour, index) => (
        <TourItem key={index} {...tour} />
      ))}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(tourData.length / toursPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center"}
        activeClassName={
          "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
        }
        previousClassName={"mx-1 px-4 py-2 border border-gray-00 rounded-full"}
        nextClassName={"mx-1 px-4 py-2 border border-gray-300 rounded-full"}
        breakClassName={"mx-1 px-4 py-2"}
        disabledClassName={"mx-1 px-4 py-2 text-gray-400 cursor-not-allowed"}
      />
    </div>
  );
};

export default TourItems;
