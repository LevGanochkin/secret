import { useState, type FC, type FormEvent } from "react";
import { PASS, type StageProps } from "../../utils";
import { LetterText } from "../typography";
import { CustomInput } from "../input";

const SecondStage: FC<StageProps> = ({ nextStage }) => {
  const [pass, setPass] = useState("");

  const handleProceed = (e: FormEvent) => {
    e.preventDefault();

    if (pass === PASS) {
      nextStage();
    }
  };

  return (
    <form onSubmit={handleProceed} className="flex-col stage">
      <LetterText classes="auth-title ruby">
        Enter the code in right order
      </LetterText>
      <CustomInput pass={pass} setPass={setPass} />
      <button type="submit" className="btn btn-submit">
        <LetterText classes="auth-title ruby">Submit</LetterText>
      </button>
    </form>
  );
};

export default SecondStage;
