import React from "react";
import "./styles/InfiniteScroll.css"; // Import the CSS file

const names = ["BGMI", "Valorant", "Call of Duty", "Sinu", "Nayan", "Anjan", "Piyush", "Gunnu"];

export const InfiniteScroll = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[#282929] h-40">
      <div className="flex items-start mb-4 mt-4 text-center text-[10rem] tracking-widest font-extrabold pt-10">
        <div className="px-8 py-4 pt-10">
         / MOST POPULAR /
        </div>
      </div>

      <div className="wrapper">
        <div className="scroll">
          {names.map((name, index) => (
            <div key={index} className={`item item${index + 1}`}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
