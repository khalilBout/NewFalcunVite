import React, { useState } from "react";
import { motion } from "framer-motion";

const MobileLink = ({ link }) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="">
      <div className="md:hidden m-2">
        {/* MENU BUTTON */}
        <button
          className=" w-8 h-7 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-[85vw] h-screen bg-dark/90 text-white flex flex-col items-center justify-center gap-8 text-3xl"
          >
            {link?.map((link) => (
              <motion.div
                variants={listItemVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#000000",
                  // backgroundColor: "#FEC3A6",
                  backgroundColor: "#FEC3A6",
                }}
                className="cursor-pointer font-sansArabic py-2 px-8 rounded-full"
                key={link.name}
                onClick={() => setOpen((prev) => !prev)}
              >
                <a href={`#${link.href}`}>{link.name}</a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileLink;
