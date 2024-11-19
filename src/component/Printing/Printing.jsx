import Card from "../Card/Card";

// image
import group from "../../assets/service/Printing/grp.png";
import bero from "../../assets/service/Printing/caty/bero.png";
import cado from "../../assets/service/Printing/caty/cado.png";
import serv from "../../assets/service/Printing/caty/serv.png";
import staf from "../../assets/service/Printing/caty/staf.png";
import tsh from "../../assets/service/Printing/caty/tsh.png";

const dataInfo = [
  { titel: "منتجات مكتبية", prix: "160", imgSrc: bero },
  { titel: "هدايا تذكارية", prix: "200", imgSrc: cado },
  { titel: "معدات وأدوات", prix: "280", imgSrc: staf },
  { titel: "ملابس وأزياء", prix: "120", imgSrc: tsh },
  { titel: "أواني منزلية", prix: "120", imgSrc: serv },
];

const Printing = () => {
  return (
    <section id="embroidery" className=" bg-gray/10 py-16">
      {/* info dev  */}
      <div className="screenPadding relative py-8 flex justify-center max-h-[320px] bg-gradient-to-l from-primary to-secondary">
        {/* image dev  */}
        <div className="lg:w-1/2 max-lg:hidden">
          <img
            src={group}
            alt="Direct Embroidery"
            className="absolute -bottom-8 right-12 w-[320px] h-auto"
          />
        </div>
        {/* text dev  */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4">
          <h1 className="font-fontTitle text-2xl">الطباعة الحرارية </h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            لمسة نهائية حيوية. حيث نعتمد في هذه الخدمة على نقل التصميم بدرجات
            حرارة عالية مما يضمن تفاصيل دقيقة وألوان زاهية على مختلف الأسطح
            والأقمشة ، حسث نقوم من خلال هذه التقنية بطباعة عالية الجودة بالألوان
            الكاملة على أي حجم من المنتجات.{" "}
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

export default Printing;
