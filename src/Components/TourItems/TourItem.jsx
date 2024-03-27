const TourItem = (props) => {
  const { image, title, startLocation, price, originalPrice } = props;
  console.log("Giá trị của image:", image);
  return (
    <div className="border border-solid border-gray-400 w-[750px] h-[234px] rounded-b-lg shadow-xl mt-5 mb-5">
      <div className="flex">
        <img className="pl-4 pt-4 w-[210px] h-[150px]" src={image} alt="Tour" />
        <div className="flex flex-col pt-4 pl-4">
          <p className="text-2xl w-[470px] h-[66px]">{title}</p>
          <p className="text-[#0064D2] font-semibold">{startLocation}</p>
          <div className="flex justify-between items-center w-[530px]">
            <div>
              <p className="pt-7 text-2xl text-[#FF0000] font-semibold">
                {price}
              </p>
              <p className="pt-3 text-xl text-[#959595] font-semibold line-through">
                {originalPrice}
              </p>
            </div>
            <button className="text-black bg-[#FFB61A] font-semibold text-base w-[90px] h-[25px] rounded-lg mr-7 mt-20">
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
