import { useState } from "react";
import "./Styles/About.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const [mission, setMission] = useState(true);
  const [advantages, setAdvantages] = useState(false);

  const handleAdvantages = (e) => {
    e.preventDefault(); 
    setAdvantages(true);
    setMission(false);
  };

  const handleMission = (e) => {
    e.preventDefault();
    setAdvantages(false);
    setMission(true);
  };

  return (
    <div className="h-[80vh]">
      <div className="flex flex-col items-center justify-center pt-12 pb-8">
        <h1 className="text-5xl font-bold">
          About <span>us</span>
        </h1>
        <p className="py-4 text-lg font-bold">
          A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN RELATED INFO
        </p>
      </div>
      <motion.div className="about" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="container">
          <motion.h1 variants={variants} initial="initial" whileInView="animate">
            WE ARE BAYYA
          </motion.h1>
          <motion.h2 variants={variants} initial="initial" whileInView="animate">
            A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with our services.
          </motion.h2>
          <motion.p variants={variants} initial="initial" whileInView="animate">
            <span className="underline cursor-pointer gap-x-3 active:text-gray-600" onClick={(e) => handleMission(e)}>
              Our Mission
            </span>{" "}
            <span>|</span>{" "}
            <span className="underline cursor-pointer gap-x-3 active:text-gray-600" onClick={(e) => handleAdvantages(e)}>
              Our Advantages
            </span>{" "}
          </motion.p>
        </motion.div>
        <motion.div className="textContainer" variants={variants} initial="initial" whileInView="animate">
          {mission && (
            <motion.p variants={variants} initial="initial" whileInView="animate">Bitcoin is based on a protocol known as the blockchain, which allows to create, transfer and verify ultra-secure financial data without interference of third parties.</motion.p>
          )}
          {advantages && (
            <motion.p variants={variants} initial="initial" whileInView="animate">Our mission as an official partner of Bitcoin Foundation is to help you enter and better understand the world of #1 cryptocurrency and avoid any issues you may encounter.</motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
