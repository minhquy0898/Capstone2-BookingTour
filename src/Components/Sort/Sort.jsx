import { useEffect } from "react";
import { useState } from "react";

const Sort = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  useEffect(() => {
    if (selectedButton === 1) {
      document.getElementById("button2").checked = false;
      document.getElementById("button3").checked = false;
      document.getElementById("button4").checked = false;
    } else if (selectedButton === 2) {
      document.getElementById("button1").checked = false;
      document.getElementById("button3").checked = false;
      document.getElementById("button4").checked = false;
    } else if (selectedButton === 3) {
      document.getElementById("button1").checked = false;
      document.getElementById("button2").checked = false;
      document.getElementById("button4").checked = false;
    } else if (selectedButton === 4) {
      document.getElementById("button1").checked = false;
      document.getElementById("button2").checked = false;
      document.getElementById("button3").checked = false;
    }
  }, [selectedButton]);

  return (
    <div className="border border-solid border-gray-400 w-[full] h-[226px] rounded-2xl shadow-xl">
      <h1 className=" text-2xl font-semibold pt-5 pl-5">Sắp xếp</h1>
      <div className=" flex flex-col">
        <div className=" flex mt-4">
          <input
            type="radio"
            className=" h-5 w-5 ml-7 "
            id="button1"
            value="1"
            checked={selectedButton === 1}
            onChange={() => setSelectedButton(1)}
          ></input>
          <p className=" text-base ml-5 ">Mặc định</p>
        </div>
        <div className=" flex mt-4">
          <input
            type="radio"
            className=" h-5 w-5 ml-7"
            id="button2"
            value="2"
            checked={selectedButton === 2}
            onChange={() => setSelectedButton(2)}
          ></input>
          <p className=" text-base ml-5 ">Đánh giá cao nhất</p>
        </div>
        <div className=" flex mt-4">
          <input
            type="radio"
            className=" h-5 w-5 ml-7"
            id="button3"
            value="3"
            checked={selectedButton === 3}
            onChange={() => setSelectedButton(3)}
          ></input>
          <p className=" text-base ml-5 ">Giá tăng dần</p>
        </div>
        <div className=" flex mt-4">
          <input
            type="radio"
            className=" h-5 w-5 ml-7"
            id="button4"
            value="4"
            checked={selectedButton === 4}
            onChange={() => setSelectedButton(4)}
          ></input>
          <p className=" text-base ml-5 ">Giá giảm dần</p>
        </div>
      </div>
    </div>
  );
};

export default Sort;
