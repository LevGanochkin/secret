import { useState, type ReactNode } from "react";
import "./App.css";
import FirstStage from "./components/first-stage";
import SecondStage from "./components/second-stage";
import ThirdStage from "./components/third-stage";
import { AnimatePresence, motion } from "motion/react";
import { LetterText } from "./components/typography";

const getInit = () => Boolean(sessionStorage.getItem("started"));

function App() {
  const [stage, setStage] = useState(0);
  const [isFirst, setIsFirst] = useState(getInit);

  const handleStart = () => {
    sessionStorage.setItem("started", "true");
    setIsFirst(true);
  };

  const nextStage = () => setStage((prev) => prev + 1);
  const prevStage = () => setStage((prev) => (prev > 0 ? prev - 1 : prev));

  const dynamicRender: { [key: number]: ReactNode } = {
    0: <FirstStage nextStage={nextStage} />,
    1: <SecondStage nextStage={nextStage} />,
    2: <ThirdStage />,
  };

  return isFirst ? (
    <section>
      <button onClick={prevStage} className="btn hidden"></button>
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={
            stage === 2
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.9, filter: "blur(10px)" }
          }
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={
            stage === 2
              ? { opacity: 1 }
              : { opacity: 0, scale: 1.1, filter: "blur(10px)" }
          }
          transition={{ duration: stage === 2 ? 0 : 1 }}
        >
          {dynamicRender[stage]}
        </motion.div>
      </AnimatePresence>
    </section>
  ) : (
    <button className="btn btn-submit" onClick={handleStart}>
      <LetterText classes="auth-title ruby">Identify magic talent</LetterText>
    </button>
  );
}

export default App;
