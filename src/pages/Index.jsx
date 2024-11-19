import About from "../component/About/About";
import ServiceUniforms from "../component/ServiceUniforms/ServiceUniforms";
import Embroidery from "../component/Embroidery/Embroidery";
import AboutSec2 from "../component/AboutSec2/AboutSec2";
import AboutSec3 from "../component/AboutSec3/AboutSec3";
import Printing from "../component/Printing/Printing";
import Info from "../component/Info/Info";
import Map from "../component/Map/Map";
import Brand from "../component/Brand/Brand";
import { Footer } from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import MenuFood from "../component/MenuFood/MenuFood";
import Reserve from "../component/Reserve/Reserve";
import Service from "../component/Service/Service";
const Index = () => {
  return (
    <div>
      <Hero />
      <ServiceUniforms />
      <About />
      <Embroidery />
      <AboutSec2 />
      <Printing />
      <AboutSec3 />
      <Info />
      <Map />
      <Brand />
      <Footer />
    </div>
  );
};

export default Index;
