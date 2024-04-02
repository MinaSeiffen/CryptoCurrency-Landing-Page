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
  return (
    <div className="h-[150vh] bg-gray-50 max-sm:h-[240vh] max-lg:h-[230vh]">
      <div className="flex flex-col items-center justify-center pt-8 pb-8 text-gray-500 max-sm:mx-4">
        <h1 className="text-5xl font-bold max-sm:mx-auto max-sm:text-3xl max-lg:text-3xl">
          About <span className="max-sm:mx-auto max-lg:mx-auto">us</span>
        </h1>
        <p className="py-4 text-lg font-bold max-sm:text-xs max-sm:font-normal max-lg:text-xs max-lg:font-normal">
          A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN
          RELATED INFO
        </p>
      </div>
      <motion.div
        className="about max-lg:flex-col max-sm:mx-auto"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="container max-sm:max-w-[300px] max-sm:justify-center max-sm:items-center max-sm:-z-2">
          <img src="./about.png" alt="" />
        </motion.div>
        <motion.div
          className="textContainer max-sm:-z-2 "
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <div className="rounded-lg bg-slate-50 mb-3  hover:bg-white max-sm:relative max-sm:max-w-[390px]">
            <div className="flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:pr-0 max-sm:pl-0 ">
              <img src="./folder.svg" alt="" className="max-sm:max-w-[24px]" />
              <h1 className="font-extrabold max-sm:text-lg max-sm:font-extralight">Digital Currency</h1>
            </div>
            <p className="font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-0 max-sm:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 mb-3 hover:bg-white max-sm:relative max-sm:max-w-[390px]">
            <div className="flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:pr-0 max-sm:pl-0">
              <img src="./safe.svg" alt="" className="max-sm:max-w-[24px]" />
              <h1 className="font-extrabold max-sm:text-lg max-sm:font-extralight">Encryption Techniques</h1>
            </div>
            <p className="font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-0 max-sm:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 mb-3 hover:bg-white max-sm:relative max-sm:max-w-[390px]">
            <div className="flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:pr-0 max-sm:pl-0">
              <img src="./bank.svg" alt="" className="max-sm:max-w-[24px]"/>
              <h1 className="font-extrabold max-sm:text-lg max-sm:font-extralight">Independent of Banks</h1>
            </div>
            <p className="font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-0 max-sm:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="my-12 max-w-[100%] max-sm:h-[65vh] -z-2 bg-white">
        <div className="flex flex-row p-10 gap-32 mx-auto max-w-[70%] max-sm:flex-col max-sm:gap-14 max-sm:max-w-[300px] max-lg:w-[40%] max-lg:justify-center max-lg:items-center">
          <div className="justify-center items-center max-w-[40%] max-sm:flex-row max-sm:mx-auto max-sm:max-w-[400px]">
            <h1 className="text-3xl text-gray-500 max-sm:text-lg max-lg:text-base max-sm:flex-row max-sm:w-[350px] max-sm:justify-center max-sm:-mx-12">
              We Create Customer Relationship
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-lg text-slate-400">Users</h5>
            <h1 className="text-2xl text-gray-700">20M+</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-lg text-slate-400">Country</h5>
            <h1 className="text-2xl text-gray-700">135+</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-lg text-slate-400">Transaction</h5>
            <h1 className="text-2xl text-gray-700">40M+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
