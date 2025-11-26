import { useState, type FC } from "react";
import { riddleEN, riddleRU } from "../../utils";
import { LetterText, MagicText } from "../typography";
import { AnimatePresence } from "motion/react";

const ThirdStage: FC = () => {
  const [text, setText] = useState(riddleEN);

  const handleClick = () => {
    setText((prev) => (prev === riddleEN ? riddleRU : riddleEN));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <MagicText key={text} text={text} delay={0.06} />
      </AnimatePresence>
      <button onClick={handleClick} className="btn btn-hint">
        <LetterText classes="auth-title ruby ">Hint</LetterText>
      </button>
    </>
  );
};

export default ThirdStage;
