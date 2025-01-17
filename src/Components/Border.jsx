import React, { useEffect, useState } from 'react';

const Border = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger the sliding effect when the component mounts
    setSlideIn(true);
  }, []);

  return (
    <div
      className={`bg-lime-500  h-1 w-full transition-all duration-1000 ease-out ${slideIn ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}
    ></div>
  );
};

export default Border;


