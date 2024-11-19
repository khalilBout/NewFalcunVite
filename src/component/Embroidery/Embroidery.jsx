import Card from "../Card/Card";

// image
import machi from "../../assets/service/Embroidery/machi.png";
import cas from "../../assets/service/Embroidery/caty/cas.png";
import shos from "../../assets/service/Embroidery/caty/shos.png";
import tsh from "../../assets/service/Embroidery/caty/t-sh.png";
import tshert from "../../assets/service/Embroidery/caty/t-shet.png";

const dataInfo = [
  { titel: "قبعات", prix: "160", imgSrc: cas },
  { titel: "أحذية", prix: "200", imgSrc: shos },
  { titel: "ملابس مهنية", prix: "280", imgSrc: tsh },
  { titel: "مختلف الملابس", prix: "120", imgSrc: tshert },
];

const Embroidery = () => {
  return (
    <section id="embroidery" className=" bg-gray/10 pt-20">
      {/* info dev  */}
      <div className="screenPadding relative py-8 flex justify-center max-h-[320px] bg-gradient-to-l from-primary to-secondary">
        {/* image dev  */}
        <div className="lg:w-1/2 max-lg:hidden">
          <img
            src={machi}
            alt="Direct Embroidery"
            className="absolute -bottom-12 right-12 w-[220px] h-auto"
          />
        </div>
        {/* text dev  */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4">
          <h1 className="font-fontTitle text-2xl">الطرز المباشر </h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            نستخدم خيط تطريز من البوليستر بنسبة 100% حتى 15 لونًا لضمان متانة
            وألوان زاهية خيوط عالية الوضوح تضمن تفاصيل دقيقة وجذابة.
          </h2>
          <div className="flex gap-2">
            <button className="hover:scale-110 px-2 py-1 bg-red-500 hover:bg-secondary text-white font-fontBody text-[13px] sm:text-[15px] hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              إكتشف المزيد
            </button>
            <button className="hover:scale-110 px-2 py-1 bg-gray text-white font-fontBody text-[15px] hover:bg-white hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      {/* cart dev  */}

      <div className="screenPadding w-full py-8 flex justify-center gap-4 flex-wrap ">
        {dataInfo.map((elm, ind) => {
          return <Card key={ind} data={elm} />;
        })}
      </div>
    </section>
  );
};

export default Embroidery;
