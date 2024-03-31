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
      <div className="bg-gray-50 mb-10">
        <h1 className="text-3xl flex justify-center gap-1 text-gray-600 mb-10">
          How it works
        </h1>
        <motion.div
          className="about bg-gray-50 max-w-[70%] mx-auto h-[100vh] flex"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="container max-w-[45%] mx-auto">
            {isCreate && (
              <motion.img src="./create.png" alt="" className="mx-auto" />
            )}
            {isLink && (
              <motion.img src="./link.png" alt="" className="mx-auto" />
            )}
            {isBuy && (
              <motion.img src="./account.png" alt="" className="mx-auto" />
            )}
          </motion.div>
          <motion.div
            className="textContainer "
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <div
              className={`rounded-lg bg-slate-50 mb-5 ${
                isCreate ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleCreate();
              }}
            >
              <div className={`flex flex-row items-center gap-3 p-5`}>
                <div
                  className={`border rounded-full w-12 h-12 justify-center items-center flex ${
                    isCreate ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}
                >
                  1
                </div>

                <h1
                  className={`font-extrabold ${
                    !isCreate ? "font-semibold text-gray-500" : ""
                  }`}
                >
                  Create an account
                </h1>
              </div>
              <p className={`font-light pb-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repellendus voluptatem earum accusantium, eveniet iste incidunt
                saepe numquam tempora nostrum, reiciendis vero quisquam sit
                autem amet laboriosam rerum, obcaecati nesciunt?
              </p>
            </div>
            <div
              className={`rounded-lg bg-slate-50 mb-5 ${
                isLink ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleLink();
              }}
            >
              <div className="flex flex-row items-center gap-3 p-5">
                <div className={`border rounded-full w-12 h-12 justify-center items-center flex ${
                    isLink ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}>
                  2
                </div>
                <h1 className={`font-extrabold ${
                    !isLink ? "font-semibold text-gray-500" : ""
                  }`}>Link your Wallet</h1>
              </div>
              <p className="font-light pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                repellendus voluptatem earum accusantium, eveniet iste incidunt
                saepe numquam tempora nostrum, reiciendis vero quisquam sit
                autem amet laboriosam rerum, obcaecati nesciunt?
              </p>
            </div>
            <div
              className={`rounded-lg bg-slate-50 mb-5 ${
                isBuy ? "bg-gray-200 border border-gray-400" : ""
              }`}
              onClick={() => {
                handleBuy();
              }}
            >
              <div className="flex flex-row items-center gap-3 p-5">
                <div className={`border rounded-full w-12 h-12 justify-center items-center flex ${
                    isBuy ? "bg-gray-500 text-white" : "text-gray-500"
                  }`}>
                  3
                </div>
                <h1 className={`font-extrabold ${
                    !isBuy ? "font-semibold text-gray-500" : ""
                  }`}>Start Buying and Trading</h1>
              </div>
              <p className="font-light pb-5">
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
