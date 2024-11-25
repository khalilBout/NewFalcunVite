import { useState } from "react";

const BoxImg = ({ dataProduct }) => {
  const { imgSrc, imgList } = dataProduct;
  const newList = [imgSrc, ...imgList];
  const [mainImg, setMainImg] = useState(newList[0]);

  return (
    <div className="w-full ">
      <div className="  flex justify-center items-center gap-2 w-full h-full">
        <div className="w-2/3 h-full flex justify-center items-center ">
          <img src={mainImg} alt="" className=" cursor-pointer h-full w-auto" />
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          {newList.map((elm, ind) => (
            <div
              key={ind}
              className="h-[70px] mdl:h-[90px] w-[55px] mdl:w-[80px] border-black border-2 cursor-pointer flex justify-center items-center hover:scale-110 duration-200 transition-all"
            >
              <img
                src={elm}
                alt=""
                className=" cursor-pointer w-auto h-[65px] mdl:h-[85px] object-cover object-center"
                onClick={() => {
                  setMainImg(newList[ind]);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxImg;
