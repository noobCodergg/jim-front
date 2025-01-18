import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const welcomeText =
    "Welcome! I am Jim Ferdous, I’m a dedicated designer and structural engineer, combining technical precision with creative vision to deliver innovative, sustainable solutions. With a strong foundation in both design and engineering, I’m committed to transforming concepts into reality while ensuring efficiency and structural integrity. Let’s collaborate and create impactful, forward thinking projects that stand the test of time.";

  const expertise = [
    "AutoCAD",
    "ETABS",
    "MS Office",
    "SketchUp",
    "Illustrator",
  ];

  const [currentExpertise, setCurrentExpertise] = useState(0);
  const [displayExpertise, setDisplayExpertise] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [typedTextFirstLine, setTypedTextFirstLine] = useState(""); 
  const [typedTextSecondLine, setTypedTextSecondLine] = useState(""); 
  const [typingIndex, setTypingIndex] = useState(0); 
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false); 

  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  const combinationLockEffect = (text) => {
    let displayedText = Array(text.length).fill("_");
    let shuffleCount = Array(text.length).fill(0);

    const interval = setInterval(() => {
      let allLettersCorrect = true;
      let shuffledText = [...displayedText];

      for (let i = 0; i < text.length; i++) {
        if (shuffledText[i] !== text[i] && isAnimating) {
          shuffledText[i] = getRandomLetter();
          shuffleCount[i]++;
          allLettersCorrect = false;
        }

        if (shuffleCount[i] > 15) {
          shuffledText[i] = text[i];
        }
      }

      displayedText = shuffledText;
      setDisplayExpertise(shuffledText.join(""));

      if (allLettersCorrect) {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 50);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationComplete(false);
    combinationLockEffect(expertise[currentExpertise]);
  };

  const moveToNextExpertise = () => {
    setTimeout(() => {
      setCurrentExpertise((prev) => (prev + 1) % expertise.length);
    }, 1500);
  };

  useEffect(() => {
    if (animationComplete) {
      moveToNextExpertise();
    }
  }, [animationComplete]);

  useEffect(() => {
    startAnimation();
  }, [currentExpertise]);

  useEffect(() => {
    if (typingIndex < welcomeText.length) {
      const timeoutId = setTimeout(() => {
        if (!isFirstLineComplete) {
          setTypedTextFirstLine((prev) => prev + welcomeText[typingIndex]);
        } else {
          setTypedTextSecondLine((prev) => prev + welcomeText[typingIndex]);
        }
        setTypingIndex(typingIndex + 1);
      }, 10);

      return () => clearTimeout(timeoutId);
    } else if (typingIndex === welcomeText.length) {
      setIsFirstLineComplete(true);
    }
  }, [typingIndex, isFirstLineComplete]);

  const splitWelcomeText = () => {
    const splitIndex = welcomeText.indexOf("I would love");
    return [
      welcomeText.substring(0, splitIndex).trim(),
      welcomeText.substring(splitIndex).trim(),
    ];
  };

  const [firstLine, secondLine] = splitWelcomeText();

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-hero-pattern bg-right-top bg-no-repeat relative pl-4 sm:pl-12 lg:pl-32"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute z-10 px-6 sm:px-8 md:px-12 text-left max-w-4xl w-full flex flex-col sm:items-start sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl text-white font-extrabold bounce-animation">
          Jim<br /> <span className="text-primary">Ferdous</span>
        </h1>

        <p className="text-gray-400 mt-4 text-sm sm:text-md md:text-lg lg:text-xl">
          {typedTextFirstLine}
        </p>
        <p className="text-gray-400 mt-2 text-sm sm:text-md md:text-lg lg:text-xl">
          {typedTextSecondLine}
        </p>

        <p className="text-gray-400 mt-20 text-xl sm:text-3xl lg:text-4xl">
          <span className="text-green-500 font-bold">{displayExpertise}</span>
        </p>
      </div>

      <style>
        {`
          @keyframes bounce {
            0% { transform: translateY(0); }
            25% { transform: translateY(-6px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(-3px); }
            100% { transform: translateY(0); }
          }

          .bounce-animation {
            animation: bounce 2s ease-in-out infinite;
          }

          p { line-height: 1.5; margin: 0; }
          h1, p { position: relative; margin: 0; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
