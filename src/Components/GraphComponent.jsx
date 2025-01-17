import React, { useState, useEffect, useRef } from "react";

const skills = [
  { name: "AutoCAD", proficiency: 97 },
  { name: "ETABS", proficiency: 95 },
  { name: "MS Office", proficiency: 90 },
  { name: "SketchUp", proficiency: 30 },
  { name: "Illustrator", proficiency: 30 },
];

const GraphComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Use Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true); // Start animation when the component is visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll event handler to update the scroll position for cube rotation
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate rotation for cubes based on scroll position
  const rotationTopRight = (scrollY / 5) % 360; 
  const rotationBottomLeft = -(scrollY / 5) % 360;

  return (
    <div
      className="min-h-screen bg-black text-white px-4 relative flex items-center justify-center"
      id="myskills"
      ref={sectionRef} // Attach the ref to the section
    >
      {/* Container for Progress Bars */}
      <div className="w-full max-w-3xl p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gradient bg-clip-text text-white">
          Skills
        </h2>

        {/* Progress Bars */}
        <div className="w-full max-w-lg">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 mb-6">
              {/* Skill Label */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{skill.name}</span>
                <span className="text-sm text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-6 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-1000 ease-in-out"
                  style={{
                    width: loaded ? `${skill.proficiency}%` : "0%",
                    boxShadow: `0px 4px 10px rgba(0, 128, 0, 0.4)`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Right Cube */}
      <div
        className="absolute top-8 right-20 w-24 h-24 sm:w-16 sm:h-16 cube-container"
        style={{
          transform: `rotateY(${rotationTopRight}deg) rotateX(20deg)`,
          perspective: "1500px",
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      {/* Bottom Left Cube */}
      <div
        className="absolute bottom-8 left-20 w-24 h-24 sm:w-16 sm:h-16 cube-container"
        style={{
          transform: `rotateY(${rotationBottomLeft}deg) rotateX(-20deg)`,
          perspective: "1500px",
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;
