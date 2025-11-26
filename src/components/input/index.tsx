import { useEffect } from "react";
import OTPInput from "react-otp-input";
import "./input.css";

type CustomInputProps = {
  pass: string;
  setPass: (s: string) => void;
};

export const CustomInput = ({ pass, setPass }: CustomInputProps) => {
  useEffect(() => {
    if (pass.length >= 5) {
      const selection = window.getSelection();
      selection?.removeAllRanges();
    }
  }, [pass]);

  const handleChange = (s: string) => {
    if (s.length === 0 || /^[A-Za-z]+$/.test(s)) {
      setPass(s);
    } else {
      throw new Error("Invalid sign");
    }
  };

  return (
    <OTPInput
      value={pass}
      onChange={handleChange}
      numInputs={5}
      renderInput={(props, i) => <input id={`${i + 1}`} {...props} />}
      containerStyle={"container"}
      inputStyle={"input"}
      shouldAutoFocus
      inputType="text"
    />
  );
};
