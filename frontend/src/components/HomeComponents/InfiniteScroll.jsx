import React from "react";
import "../styles/InfiniteScroll.css"; 

const names = [
  { name: "BGMI", url: "https://www.battlegroundsmobileindia.com/" }, 
  { name: "Valorant", url: "https://playvalorant.com/en-us/" },
  { name: "Call Of Duty", url: "https://www.callofduty.com/" },
  { name: "CS GO", url: "https://www.counter-strike.net/" },
  { name: "Brawl Stars", url: "https://supercell.com/en/games/brawlstars/" },
  { name: "Free Fire", url: "https://ff.garena.com/en" },
  { name: "Pokemon Go", url: "https://pokemongolive.com/?hl=en" },
  { name: "League Of Legends", url: "https://www.leagueoflegends.com/en-gb/" },
];

export const InfiniteScroll = () => {
  const handleClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <div className="flex flex-col justify-center items-center text-[#282929] h-40">
      <div className="flex items-start mb-4 mt-4 text-center text-[10rem] tracking-widest font-extrabold pt-10">
        <div className="px-8 py-4 pt-10">/ MOST POPULAR /</div>
      </div>

      <div className="wrapper">
        <div className="scroll">
          {names.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.url)}
              className={`item item${index + 1}`}
            >
              {item.name} {/* Use item.name to display the game name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
