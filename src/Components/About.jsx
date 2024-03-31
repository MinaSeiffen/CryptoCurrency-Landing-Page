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
    <div className="h-[150vh] bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-8 pb-8 text-gray-500">
        <h1 className="text-5xl font-bold ">
          About <span>us</span>
        </h1>
        <p className="py-4 text-lg font-bold ">
          A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN
          RELATED INFO
        </p>
      </div>
      <motion.div
        className="about"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="container">
          <img src="./about.png" alt="" />
        </motion.div>
        <motion.div
          className="textContainer "
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <div className="rounded-lg bg-slate-50 mb-3 hover:bg-white">
            <div className="flex flex-row items-center gap-3 p-5">
              <img src="./folder.svg" alt="" />
              <h1 className="font-extrabold">Digital Currency</h1>
            </div>
            <p className="font-light pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 mb-3 hover:bg-white">
            <div className="flex flex-row items-center gap-3 p-5">
              <img src="./safe.svg" alt="" />
              <h1 className="font-extrabold">Encryption Techniques</h1>
            </div>
            <p className="font-light pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 mb-3 hover:bg-white">
            <div className="flex flex-row items-center gap-3 p-5">
              <img src="./bank.svg" alt="" />
              <h1 className="font-extrabold">Independent of Banks</h1>
            </div>
            <p className="font-light pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus voluptatem earum accusantium, eveniet iste incidunt
              saepe numquam tempora nostrum, reiciendis vero quisquam sit autem
              amet laboriosam rerum, obcaecati nesciunt?
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="my-12  max-w-[100%] bg-white">
        <div className="flex flex-row p-10 gap-32 mx-auto max-w-[70%]">
          <div className="justify-center items-center max-w-[40%]">
            <h1 className="text-3xl text-gray-500">
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
