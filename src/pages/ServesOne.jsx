import { useState } from "react";
import BoxImg from "../component/Ui/BoxImg";
import { dataUniforms, dataEmbroidery, dataPrinting } from "../component/data";

import compl from "../assets/service/Uniforms/caty/compl.png";
import man from "../assets/service/Uniforms/caty/man.png";
import kok from "../assets/service/Uniforms/caty/kok.png";
import dosser from "../assets/service/Uniforms/caty/dosser.png";
import Card from "../component/Card/Card";
import { useLocation } from "react-router-dom";

const ServesOne = () => {
  const location = useLocation();
  console.log("url:", location.pathname);
  const [Qt, setQt] = useState(1);

  const handleQt = (e) => {
    setQt(e.target.value);
  };

  const dataProduct = {
    id: 1,
    titel: "ملابس ورشات",
    prix: "160",
    imgSrc: compl,
    imgList: [man, kok, dosser],
    desc: "نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم تبحثون عن ملابس رسمية للشركات نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم تبحثون عن ملابس رسمية للشركات تُبرز تُبرز العلامة التجارية أو مواد ترويجية تترك انطباعًا لا يُنسى ، فإن فالكون هنا لدعم رحلتكم في بناء العلامة التجارية .ننتظر تواصلكم لتكتشفوا كيف يمكن لفالكون أن يسهم في تعزيز صورتكم المهنية والتميز في السوق.",
    catygory: "Uniforms",
  };

  const productSend = {
    name: dataProduct.titel,
    prix: dataProduct.prix,
    qt: Qt,
  };

  const sendOrder = () => {
    console.log("data send:", productSend);
  };
  // const dataImage = {}
  return (
    <section>
      <div className="screenPadding flex mdl:flex-row mt-20 mdl:mt-24 py-8 flex-wrap-reverse ">
        {/* info product  */}
        <div className="w-full mdl:w-1/2 p-4 ">
          <h1 className=" font-fontTitle text-2xl mdl:text-3xl ">
            {dataProduct.titel}
          </h1>

          <div className="flex gap-2">
            <h2 className="font-fontTitle text-xl md:text-2xl mdl:mr-4 ">
              السعر :{" "}
            </h2>
            <h3 className=" font-fontBody text-xl text-red-600">
              {dataProduct.prix} ريال
            </h3>
          </div>

          <div className="">
            <h2 className="font-fontTitle text-xl md:text-2xl mdl:mr-4 ">
              الوصف{" "}
            </h2>
            <h3 className=" font-fontBody text-[15px] mdl:text-[17px]  mdl:pr-16 max-md:text-center">
              {dataProduct.desc}
            </h3>
          </div>
          <div className="flex justify-center items-center gap-4 mdl:gap-8 mt-3">
            <div className=" flex justify-center items-center gap-4">
              <h2 className="  text-[15] font-fontTitle">الكمية</h2>
              <input
                className="border-2  w-[45px] bg-slate-100 text-[18px] font-fontBody outline-none px-2 "
                value={Qt}
                onChange={handleQt}
              />
            </div>
            <button
              onClick={sendOrder}
              className="hover:scale-110 duration-200 py-2 mdl:py-3 px-4 mdl:px-8 rounded-full bg-green-300 text-[13] mdl:text-[15] font-fontTitle"
            >
              أطلب الأن
            </button>
          </div>
        </div>
        {/* images section  */}
        <div className=" w-full mdl:w-1/2 p-4">
          <BoxImg dataProduct={dataProduct} />
        </div>
      </div>

      <div className="screenPadding bg-gray/30 py-8">
        <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
          منتجات ذات صلة :
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {dataUniforms.slice(0, 4).map((elm, ind) => (
            <Card key={ind} data={elm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServesOne;
