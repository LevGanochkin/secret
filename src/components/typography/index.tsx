import type { ReactNode } from "react";
import { motion } from "motion/react";
import "./typography.css";

interface TypographyBase {
  children: ReactNode;
  classes: string;
}

interface ExtendTypography {}

type TypographyType = ExtendTypography & TypographyBase;

export const MarauderText = ({ children, classes }: TypographyType) => {
  return <span className={`marauder-text ${classes}`}>{children}</span>;
};

export const LetterText = ({ children, classes }: TypographyType) => {
  return <span className={`letter-text ${classes}`}>{children}</span>;
};

export const MagicText = ({
  text,
  delay = 0.05,
}: {
  text: string;
  delay: number;
}) => {
  const lines = text.split("\n").map((line) => line.trim());

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={`${lineIndex}-${charIndex}`}
              variants={child}
              className="ruby lh-high"
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};
