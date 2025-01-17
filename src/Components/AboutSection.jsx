import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll event handler to update the scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate rotation for each cube
  const rotationLeft = (scrollY / 5) % 360; // Left cube rotates in one direction with faster speed
  const rotationRight = -(scrollY / 5) % 360; // Right cube rotates in the opposite direction with faster speed

  return (
    <section id="about" className="bg-black text-white py-20 px-4 relative">
      {/* Styles for 3D transparent cubes with visible edges */}
      <style>
        {`
          /* Container for 3D cube effect */
          .cube-container {
            perspective: 1500px; /* Setting perspective to make the 3D effect visible */
          }

          /* Cube styles */
          .cube {
            width: 100px; /* Smaller width */
            height: 100px; /* Smaller height */
            position: relative;
            transform-style: preserve-3d; /* This allows us to rotate the cube in 3D */
            transition: transform 0.05s ease-out; /* Smooth rotation with faster speed */
          }

          /* Faces of the cube - all transparent */
          .cube-face {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: transparent; /* Faces are transparent */
            border: 1px solid rgba(255, 255, 255, 0.8); /* Visible edges */
          }

          /* Front face */
          .front {
            transform: translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Back face */
          .back {
            transform: rotateY(180deg) translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Left face */
          .left {
            transform: rotateY(-90deg) translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Right face */
          .right {
            transform: rotateY(90deg) translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Top face */
          .top {
            transform: rotateX(90deg) translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Bottom face */
          .bottom {
            transform: rotateX(-90deg) translateZ(50px); /* Adjusted for smaller cubes */
          }

          /* Right Cube - positioned to the right */
          .cube-right {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%) rotateY(${rotationRight}deg) rotateX(20deg); /* Tilted and rotating in one direction */
          }

          /* Left Cube - positioned to the left */
          .cube-left {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%) rotateY(${rotationLeft}deg) rotateX(-20deg); /* Tilted and rotating in the opposite direction */
          }
        `}
      </style>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-green-500 text-lg uppercase tracking-wide">
            About Me
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            I can deliver results that <br />
            exceed your expectations.
          </h1>
          <button className="inline-flex items-center px-6 py-3 text-white border border-1 bg-transparent hover:bg-lime-500 font-medium mt-4">
            <a href="https://www.linkedin.com/in/jim-ferdous-4868b9155/" target="_blank">Hire me now!</a>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.293 17.293a1 1 0 011.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L15.586 11H7a1 1 0 100 2h8.586l-2.293 2.293a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Decorative Cube (Right Cube) */}
        <div className="hidden md:block relative cube-container">
          <div className="cube cube-right">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Decorative Cube (Left Cube) */}
        <div className="hidden md:block relative cube-container">
          <div className="cube cube-left">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
         <h1>HELLO, I AM JIM FERDOUS</h1>
         <h3 className="text-yellow-600">From Dhaka, Bangladesh</h3>
         <p>Dedicated Civil Engineer specialized in sustainable, efficient, and innovative infrastructure
solutions. From designing complex frameworks to overseeing construction, I transform ideas
into reality.</p>
<p>Proudly graduated from Department of Civil Engineering, AUST</p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                30<span className="text-green-500">+</span>
              </h1>
              <p className="mt-2 text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                35<span className="text-green-500">+</span>
              </h1>
              <p className="mt-2 text-gray-400 text-sm">World Clients</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                3<span className="text-green-500">+</span>
              </h1>
              <p className="mt-2 text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
