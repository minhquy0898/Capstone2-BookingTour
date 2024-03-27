import suggest_1 from "../../assets/suggest_1.png";
import suggest_2 from "../../assets/suggest_2.png";
import suggest_3 from "../../assets/suggest_3.png";

const Suggest = () => {
  return (
    <div className=" mt-4 border border-solid border-gray-400 w-full h-[706px] rounded-2xl shadow-xl">
      <h1 className=" text-2xl font-semibold pt-4 pl-7">Gợi ý</h1>
      <div className=" mt-5 flex flex-col">
        <img src={suggest_1}></img>
        <p className=" pl-3 font-light cursor-pointer">
          Bãi biển Đà Nẵng, bãi biễn đẹp top 10 thế giới
        </p>
      </div>
      <div className=" mt-8 flex flex-col">
        <img src={suggest_2}></img>
        <p className=" pl-3 font-light cursor-pointer">
          Sapa,Nóc nhà Đông Dương,thiên đường săn mây
        </p>
      </div>
      <div className=" mt-8 flex flex-col">
        <img src={suggest_3}></img>
        <p className=" pl-3 font-light cursor-pointer">
          Hà Nội nghìn năm văn hiến
        </p>
      </div>
    </div>
  );
};

export default Suggest;
