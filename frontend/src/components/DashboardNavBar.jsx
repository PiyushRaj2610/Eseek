import React, { useState } from "react";
import "../components/styles/Appbar.css";
import {Sidebar} from "./Dashboard/Sidebar";

export const DashboardNavBar = () => {
  const [selectedGame, setSelectedGame] = useState("Your Games");

  return (
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="bg-[#000000] border-[#282929] border-b-[0.5px] h-20 flex items-center justify-between px-10">
        <div className="text-3xl font-bold tracking-widest cursor-pointer">
          E-SEEK
        </div>
        <img
          src="./src/assets/dum.jpeg"
          className="h-10 w-10 object-cover rounded-full border-[0.5px] border-white cursor-pointer"
          alt="Profile"
        />
      </nav>

      {/*Sidebar and Main Content */}
      <div className="flex flex-1 bg-black">
        <aside className="w-64 border-white border-r-[0.5px] bg-black p-2 text-white">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-[#282929] text-8xl tracking-widest font-bold pt-5 mb-4 flex justify-center items-center">{selectedGame}</h1>
          <div className="grid grid-cols-1 gap-10 pl-20 pr-20 pt-20 ">
            {["VALORANT", "CS:GO", "FORTNITE"].map((game) => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className="p-4 bg-[#282929] border rounded-full hover:bg-gray-700 
                cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-md hover:shadow-blue-500/50"
              >
                {game}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
