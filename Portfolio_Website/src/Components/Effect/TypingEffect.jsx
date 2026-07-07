import { useState, useEffect } from "react";

const TypingEffect = () => {
  const titles = ["Mehmood Hassan", "a Web Developer", "a Python Developer"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="bg-gradient-to-r from-[#8fb8ff] via-[#7c9cff] to-[#93f7d2] bg-clip-text text-transparent inline-block after:content-['|'] after:animate-pulse after:text-cyan-300 ml-1">
      {currentText}
    </span>
  );
};

export default TypingEffect;