import Logo from "./Logo";
import Links from "./Links";
import { motion } from "framer-motion";
import MobileLink from "./MobileLink";

const Navbar = () => {
  const link = [
    {
      id: 0,
      name: "الرئيسية",
      href: "/",
    },
    {
      id: 1,
      name: "خدماتنا",
      href: "/serves",
    },
    {
      id: 2,
      name: "المدونة",
      href: "/blog",
    },
  ];
  return (
    <div className=" screenPadding fixed bg-secondary/95 font-fontTitle border-b-2 border-black/40 top-0 left-0 right-0 flex justify-between  py-4 z-50 ">
      <Logo />
      <div className=" hidden sml:flex grow gap-4 justify-end items-center">
        <Links link={link} />
        <motion.button
          initial={{ x: "-600px", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block px-4 py-1 bg-primary/80 hover:bg-green-300 text-[13px] md:text-[14px] lg:text-[15px] hover:scale-110 duration-100 transition-all rounded-full font-fontTitle"
        >
          <a href="#reserve">إتصل بنا </a>
        </motion.button>
      </div>

      <motion.div
        initial={{ x: "-600px", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="block md:hidden">
          <MobileLink link={link} />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
