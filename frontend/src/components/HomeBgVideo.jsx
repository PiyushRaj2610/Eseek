import { Home } from "../pages/Home";
import { InfiniteScroll } from "./InfiniteScroll";

export const HomeBgVideo = () => {
  return (
    <div className="flex-col w-full h-full overflow-hidden relative z-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
      >
        <source src="/HomeBgVideo.mp4" type="video/mp4" />
      </video>



      <div className="absolute top-0 left-0 w-full text-center text-white z-7">
        <div className="pb-[100px] pt-[25px]">
        <InfiniteScroll />

        </div>
        <div className="text-7xl font-bold">
          The Ultimate Networking Hub for Gamers
        </div>
        <div className="flex justify-center items-center text-3xl pt-[10px] px-10 w-full">
          <div className="w-[1000px]">
          The ultimate platform for esports players, enabling seamless searches
          for players and teams based on official achievements, gameplay clips,
          roles, and more...
          </div>
        </div>
        <div className="flex flex-col h-[80px] text-5xl mt-4 mb-100 pt-6 z-0">
          "Connect. Compete. Conquer!"
        </div>
        
      </div>
      
        
    </div>
  );
};
