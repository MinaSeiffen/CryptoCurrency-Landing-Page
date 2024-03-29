import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div
    className="mt-40 hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="container grid items-center justify-center grid-cols-2 px-4 mx-auto my-16">
      {/* left side */}
      <motion.div
        className="p-4 mt-10 text-3xl left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <p>Buy & Sell Crypto 24/7 using your retirement account</p>
        <h1 className="my-4 text-6xl">
          Invest in Cryptocurrency with Your{" "}
          <span className="text-[#dfdb00]">Azzam</span>{" "}
        </h1>
        <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
      </motion.div>

      {/* right side */}
      <motion.div
        className="p-4 right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -10, 10, -10, 10, 0],
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="img-container">
          <motion.img
            src="./hero-img.png"
            alt="crypto"
            className="mx-auto max-w-200"
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>
    </div>
    <div className="flex items-center justify-center">
      <hr className="w-3/4 mb-40" />
    </div>
    <div className="container grid items-center justify-center grid-cols-2 px-4 mx-auto my-16">
      <motion.div
        className="p-4 left i"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://i.pinimg.com/originals/06/a2/31/06a2312ada3efca32bf4161eb660cb03.gif"
          className="mx-auto rounded-3xl max-w-200"
          alt=""
          whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
      <motion.div
        className="p-4 mt-10 text-3xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="p-4 mt-10 text-3xl left">
          <h1 className="my-4 text-6xl">
            Earn passive income with <span className="text-[#dfdb00]">crypto</span>{" "}
          </h1>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold your
            assets in the app to automatically earn reward at the end of each month
            with no lockups and no limits
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
  );
}
