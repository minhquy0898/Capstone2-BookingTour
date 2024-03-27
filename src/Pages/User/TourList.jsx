import Sort from "../../Components/Sort/Sort";
import Suggest from "../../Components/Suggest/Suggest";
import TourItems from "../../Components/TourItems/TourItems";

const TourList = () => {
  return (
    <>
      <div className=" mt-6 flex items-center justify-center">
        <div className=" w-[1070px] h-[150px]  mr-20 mt-10">
          <h1 className=" text-3xl">Danh sách Tour</h1>
          <div className=" pt-20 border-b-2 border-solid border-black" />
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" mr-10 flex flex-col">
          <Sort />
          <Suggest />
        </div>
        <div>
          <TourItems />
        </div>
      </div>
    </>
  );
};

export default TourList;
