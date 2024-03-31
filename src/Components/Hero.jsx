import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="mt-10 sm:mt-20 hero bg-gray-600" // Adjusted top margin for smaller screens
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container grid h-[800px] items-center justify-center grid-cols-1 px-4 mx-auto my-16 sm:grid-cols-2"> {/* Adjusted grid columns for smaller screens */}
        {/* left side */}
        <motion.div
          className="p-4 mt-5 text-xl text-center sm:mt-10 sm:text-left sm:text-3xl left" // Adjusted text alignment and size for smaller screens
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p>One App for all your Crypto Trading</p>
          <h1 className="my-4 text-4xl sm:text-6xl"> {/* Adjusted text size for smaller screens */}
            Invest in Cryptocurrency with Your{" "}
            <span className="text-[#4f85b1]">Azzam</span>{" "}
          </h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
        </motion.div>

        {/* right side */}
        <motion.div
          className="p-4 right"
          initial={{ y: 100, opacity: 0 }} // Adjusted initial animation for smaller screens
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.1,
            // rotate: [0, -2, 2, -2, 2, 0],
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="img-container">
            <motion.img
              src="./currency.png"
              alt="crypto"
              className="max-w-[350px] mx-[350px] mb-[50px] sm:max-w-200" // Adjusted max width for smaller screens
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              src="./trade.png"
              alt="crypto"
              className="max-w-[300px] mx-[150px] mb-[50px]  sm:max-w-200" // Adjusted max width for smaller screens
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              src="./chart.png"
              alt="crypto"
              className="max-w-[300px] mx-[300px] sm:max-w-200" // Adjusted max width for smaller screens
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center">
        <hr className="w-3/4 mb-20 sm:w-3/4 sm:mb-40" /> {/* Adjusted margin for smaller screens */}
      </div>
      <div className="container grid items-center justify-center grid-cols-1 px-4 mx-auto mb-16 sm:grid-cols-2"> {/* Adjusted grid columns for smaller screens */}
        <motion.div
          className="p-4 left i"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://i.pinimg.com/originals/06/a2/31/06a2312ada3efca32bf4161eb660cb03.gif"
            className="max-w-full mx-auto rounded-3xl sm:max-w-200" // Adjusted max width for smaller screens
            alt=""
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
        <motion.div
          className="p-4 mt-5 text-2xl text-center sm:mt-10 sm:text-left sm:text-3xl" // Adjusted text alignment and size for smaller screens
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="p-4 mt-10 text-center sm:text-left"> {/* Adjusted text alignment for smaller screens */}
            <h1 className="my-4 text-4xl sm:text-6xl"> {/* Adjusted text size for smaller screens */}
              Earn passive income with <span className="text-[#4f85b1]">crypto</span>{" "}
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
