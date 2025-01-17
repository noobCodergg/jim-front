import React from "react";

const DiagonalTextSection = () => {
  return (
    <div className="relative bg-black h-64 overflow-hidden">
      {/* First Diagonal Text Band (Faded and Moving Left to Right) */}
      <div
        className="absolute -rotate-12 top-1/2 left-[-40%] w-[150%] bg-lime-500 bg-opacity-50 text-black text-opacity-50 font-bold text-lg py-4 tracking-wide uppercase"
        style={{
          transform: "rotate(-3deg) translateY(-50%)", // Ensure the band is properly centered
        }}
      >
        <div className="w-full text-center animate-move-left">
          Logo Branding • UI/UX Design • Development • Icon Design •
        </div>
      </div>

      {/* Second Diagonal Text Band (Moving Right to Left) */}
      <div
        className="absolute rotate-12 bottom-1/2 right-[-40%] w-[150%] bg-lime-500 text-black font-bold text-lg py-4 tracking-wide uppercase"
        style={{
          transform: "rotate(3deg) translateY(50%)", // Ensure the band is properly centered
        }}
      >
        <div className="w-full text-center animate-move-right">
          AutoCAD • ETAB • MS Office • Sketch UP • Illustrator
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes move-left {
            0% {
              transform: translateX(100%);
            }
            60% {
              transform: translateX(-10%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes move-right {
            0% {
              transform: translateX(-100%);
            }
            60% {
              transform: translateX(10%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          /* Applying animation to the text */
          .animate-move-left {
            animation: move-left 10s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
            animation-delay: 0s; /* No delay for the animation to restart quickly */
          }

          .animate-move-right {
            animation: move-right 10s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
            animation-delay: 0s; /* No delay for the animation to restart quickly */
          }
        `}
      </style>
    </div>
  );
};

export default DiagonalTextSection;
