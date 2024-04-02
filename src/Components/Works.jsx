import { motion } from "framer-motion";
import { useState } from "react";

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

const Works = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [isLink, setIsLink] = useState(false);
  const [isBuy, setIsBuy] = useState(false);

  const handleCreate = () => {
    setIsCreate(true);
    setIsBuy(false);
    setIsLink(false);
  };
  const handleLink = () => {
    setIsCreate(false);
    setIsBuy(false);
    setIsLink(true);
  };
  const handleBuy = () => {
    setIsCreate(false);
    setIsBuy(true);
    setIsLink(false);
  };

  return (
    <>
      <div className="bg-gray-50 mb-10 max-sm:h-[170vh] max-lg:h-[180vh]">
        <h1 className="text-3xl flex justify-center gap-1 text-gray-600 mb-10">
          How it works
        </h1>
        <motion.div
          className="about bg-gray-50 max-w-[70%] mx-auto h-[100vh] flex max-lg:flex-col max-sm:flex-col max-sm:mx-auto"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="container max-w-[45%] mx-auto">
            {isCreate && (
              <motion.img src="./create.png" alt="" className="mx-auto max-sm:w-[300px]" />
            )}
            {isLink && (
              <motion.img src="./link.png" alt="" className="mx-auto max-sm:w-[300px]" />
            )}
            {isBuy && (
              <motion.img src="./account.png" alt="" className="mx-auto max-sm:w-[300px]" />
            )}
          </motion.div>
          <motion.div
            className="textContainer "
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <div
              className={`rounded-lg bg-slate-50 mb-5 max-sm:relative max-sm:max-w-[370px] ${
                isCreate ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleCreate();
              }}
            >
              <div className={`flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:px-1`}>
                <div
                  className={`border rounded-full w-12 h-12 max-sm:w-8 max-sm:h-8 max-sm:text-base justify-center items-center flex ${
                    isCreate ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}
                >
                  1
                </div>

                <h1
                  className={`font-extrabold max-sm:text-lg ${
                    !isCreate ? "font-semibold text-gray-500" : ""
                  }`}
                >
                  Create an account
                </h1>
              </div>
              <p className={`font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-3 max-sm:mx-0`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repellendus voluptatem earum accusantium, eveniet iste incidunt
                saepe numquam tempora nostrum, reiciendis vero quisquam sit
                autem amet laboriosam rerum, obcaecati nesciunt?
              </p>
            </div>
            <div
              className={`rounded-lg bg-slate-50 mb-5 max-sm:relative max-sm:max-w-[370px] ${
                isLink ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleLink();
              }}
            >
              <div className="flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:px-1">
                <div className={`border rounded-full w-12 h-12  max-sm:w-8 max-sm:h-8 max-sm:text-base justify-center items-center flex ${
                    isLink ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}>
                  2
                </div>
                <h1 className={`font-semibold max-sm:text-lg ${
                    !isLink ? "font-extrabold text-gray-500" : ""
                  }`}>Link your Wallet</h1>
              </div>
              <p className="font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-3 max-sm:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repellendus voluptatem earum accusantium, eveniet iste incidunt
                saepe numquam tempora nostrum, reiciendis vero quisquam sit
                autem amet laboriosam rerum, obcaecati nesciunt?
              </p>
            </div>
            <div
              className={`rounded-lg bg-slate-50 mb-5 max-sm:relative max-sm:max-w-[370px] ${
                isBuy ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleBuy();
              }}
            >
              <div className="flex flex-row items-center gap-3 p-5 max-sm:py-2 max-sm:px-1">
                <div className={`border rounded-full w-12 h-12 max-sm:w-8 max-sm:h-8 max-sm:text-base justify-center items-center flex ${
                    isBuy ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}>
                  3
                </div>
                <h1 className={`font-extrabold max-sm:text-lg ${
                    !isBuy ? "font-semibold text-gray-500" : ""
                  }`}>Start Buying and Trading</h1>
              </div>
              <p className="font-light pb-5 pr-[30px] pl-[92px] max-sm:w-full max-sm:font-extralight max-sm:pb-0 max-sm:pr-0 max-sm:pl-3 max-sm:mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repellendus voluptatem earum accusantium, eveniet iste incidunt
                saepe numquam tempora nostrum, reiciendis vero quisquam sit
                autem amet laboriosam rerum, obcaecati nesciunt?
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Works;
