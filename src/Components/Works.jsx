import { useRef } from "react";
import "./Styles/Work.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Setup and connect your wallet.",
    describe:(
      <>
      Interact with the bot on Telegram and manage your wallet. <br/>
      Save the mnemonic phrase in a safe location. 
      </>
    ),
    image: "https://tonk.bot/images/features-07.png",
    url: "https://t.me/tonksniper_bot",
  },
  {
    id: 2,
    title: "Create your first transaction",
    describe: (
      <>
        Recharge your wallet with TON. <br />
        Paste a valid contract in the message field and the bot will identify the token. <br />
        Choose the amount of tokens you want to buy.
      </>
    ),
    image: "https://tonk.bot/images/features-05.png",
    url: "https://docs.tonk.bot/",
  },
  {
    id: 3,
    title: "Share your referral link",
    describe:(
      <>
        Click the "Refer Friends" button, send it to your friends and get rewards for it.<br/>

        Rewards are updated in real-time, you receive them automatically with every new trade in your friend network.<br/>

        Refer your friends and earn 30% off your fees!
      </>
    ),
    image: "https://tonk.bot/images/features-06.png",
    url: "https://docs.tonk.bot/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container h-4/5">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
            <a href={item.url}>
              <button className="btn">
               <p className="btn-text z-10">
               {item.id === 1 ? "Tonk spinner" : "Learn More"}
                </p> 
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
  });

  return (
    <div className="flex justify-center">
      <div className="works" ref={ref}>
          <h1>How it <span>works</span></h1>
        <div className="progress">
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
