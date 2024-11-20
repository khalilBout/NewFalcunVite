// image
import women from "../assets/service/Uniforms/caty/women.png";
import uniform from "../assets/service/Uniforms/caty/uni.png";
import shonte from "../assets/service/Uniforms/caty/shonte.png";
import man from "../assets/service/Uniforms/caty/man.png";
import kok from "../assets/service/Uniforms/caty/kok.png";
import dr from "../assets/service/Uniforms/caty/dr.png";
import dosser from "../assets/service/Uniforms/caty/dosser.png";
import coissin from "../assets/service/Uniforms/caty/coissin.png";
import costim from "../assets/service/Uniforms/caty/costim.png";
import compl from "../assets/service/Uniforms/caty/compl.png";
///////////////
import cas from "../assets/service/Embroidery/caty/cas.png";
import shos from "../assets/service/Embroidery/caty/shos.png";
import tsh from "../assets/service/Embroidery/caty/t-sh.png";
import tshert from "../assets/service/Embroidery/caty/t-shet.png";
//////////////
import bero from "../assets/service/Printing/caty/bero.png";
import cado from "../assets/service/Printing/caty/cado.png";
import serv from "../assets/service/Printing/caty/serv.png";
import staf from "../assets/service/Printing/caty/staf.png";
import tshe from "../assets/service/Printing/caty/tsh.png";

const dataUniforms = [
  { titel: "ملابس ورشات", prix: "160", imgSrc: compl, catygory: "Uniforms" },
  { titel: "ملابس ورشات", prix: "200", imgSrc: shonte, catygory: "Uniforms" },
  { titel: "أزياء طبية ", prix: "280", imgSrc: dr, catygory: "Uniforms" },
  { titel: "لباس مطاعم", prix: "120", imgSrc: coissin, catygory: "Uniforms" },
  { titel: "سترات العمال", prix: "80", imgSrc: dosser, catygory: "Uniforms" },
  { titel: "ألبسة خاصة ", prix: "175", imgSrc: uniform, catygory: "Uniforms" },
  { titel: "بدلات رسمية", prix: "320", imgSrc: costim, catygory: "Uniforms" },
  { titel: "عاملات ", prix: "180", imgSrc: women, catygory: "Uniforms" },
  { titel: "لباس عمال", prix: "150", imgSrc: man, catygory: "Uniforms" },
  { titel: "مطاعم خاصة", prix: "150", imgSrc: kok, catygory: "Uniforms" },
];

const dataEmbroidery = [
  { titel: "قبعات", prix: "160", imgSrc: cas, catygory: "Embroidery" },
  { titel: "أحذية", prix: "200", imgSrc: shos, catygory: "Embroidery" },
  { titel: "ملابس مهنية", prix: "280", imgSrc: tsh, catygory: "Embroidery" },
  {
    titel: "مختلف الملابس",
    prix: "120",
    imgSrc: tshert,
    catygory: "Embroidery",
  },
];

const dataPrinting = [
  { titel: "منتجات مكتبية", prix: "160", imgSrc: bero, catygory: "Printing" },
  { titel: "هدايا تذكارية", prix: "200", imgSrc: cado, catygory: "Printing" },
  { titel: "معدات وأدوات", prix: "280", imgSrc: staf, catygory: "Printing" },
  { titel: "ملابس وأزياء", prix: "120", imgSrc: tshe, catygory: "Printing" },
  { titel: "أواني منزلية", prix: "120", imgSrc: serv, catygory: "Printing" },
];

export { dataUniforms, dataEmbroidery, dataPrinting };
