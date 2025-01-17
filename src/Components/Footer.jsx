import React, { useEffect, useState } from "react";

const Footer = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the footer is visible
      }
    );
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement); // Observe footer section
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement); // Clean up observer
      }
    };
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-black text-gray-400 py-12 mt-1 transition-transform duration-1000 ease-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Text */}
        <p className="text-center text-lg font-semibold text-gray-300">
          &copy; 2025 JIM FERDOUS. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-8">
          <a
            href="https://www.instagram.com/jim.ferdaous?igsh=MTA3OGJvdWF5N2M3MA==" target="_blank"
            className="text-xl text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/jim.ferdaous" target="_blank"
            className="text-xl text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/jim-ferdous-4868b9155/" target="_blank"
            className="text-xl text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
