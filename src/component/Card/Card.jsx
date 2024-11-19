import React from "react";

import whatsApp from "../../assets/WhatsApp.png";
import copml from "../../assets/service/Uniforms/caty/compl.png";

const Card = ({ data }) => {
  const { titel, prix, imgSrc } = data;

  return (
    <div className=" hover:scale-105 cursor-pointer duration-200 transition-all relative border border-black w-[140px] h-[200px] mdl:w-[200px] mdl:h-[340px] ">
      <img
        src={imgSrc}
        alt={titel}
        className="w-auto h-full object-cover object-center overflow-hidden"
      />
      <div className=" absolute bottom-0 left-0 right-0">
        <h2 className="w-full bg-slate-300 font-fontTitle text-xl text-center py-2">
          {titel}
        </h2>
        <div className=" flex justify-between p-2">
          <h4 className="text-[16px] text-center font-fontBody bg-primary rounded-full py-1 px-3">
            {prix} رس
          </h4>
          <img
            src={whatsApp}
            alt="whatsApp"
            className="w-10 h-auto object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
