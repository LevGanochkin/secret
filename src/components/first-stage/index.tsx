import type { FC } from "react";
import { LetterText, MarauderText } from "../typography";
import type { StageProps } from "../../utils";

const FirstStage: FC<StageProps> = ({ nextStage }) => {
  return (
    <div className="flex-col bg">
      <div className="flex-col text-up">
        <LetterText classes="p2 ruby lh-low">Messrs</LetterText>
        <MarauderText classes="h1 ruby">
          moony, wormtail, padfoot and prongs
        </MarauderText>
        <LetterText classes="p2 ruby">are proud to present</LetterText>
      </div>
      <button onClick={nextStage} className="flex-col text-down btn btn-auth">
        <LetterText classes="p2 white lh-low">The</LetterText>
        <MarauderText classes="h2 white">marauder auth</MarauderText>
      </button>
    </div>
  );
};

export default FirstStage;
