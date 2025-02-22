import React, { useState } from 'react';

export const Heading = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`border-b-[0.5px] border-white pt-10 pb-10 h-30 w-full mt-5 flex justify-center items-center text-8xl font-extrabold tracking-widest cursor-pointer text-transparent bg-clip-text bg-gradient-to-r ${
        hovered
          ? 'from-purple-700 to-blue-400'
          : 'from-[#282929] to-[#282929]'
      } transition-colors duration-500`}
    >
      {text}
    </div>
  );
};

