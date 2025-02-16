import { Appbar } from "../components/Appbar";
import { InfiniteScroll } from "../components/InfiniteScroll";
import { VideoBox } from "../components/VideoBox";

export const Home = () => {
  return <div className="h-screen flex flex-col">
    <div className="text-white h-22 ">
    <Appbar/>
    </div>

    <div>
      <InfiniteScroll/>
    </div>

    <div className="text-white h-full w-full flex flex-col pl-10 pt-20">

      <div className="flex flex-col justify-content h-25 text-8xl m-2">
        Eseek is LinkedIn for Gamers
      </div>

      <div className="flex flex-col h-40 w-180 flex-start">
      "This is the ultimate platform for esports players, enabling seamless searches for players and teams based on official achievements, gameplay clips, roles, and more."      
      </div>

      <div className="flex flex-col h-20 text-5xl">
      "Connect. Compete. Conquer!"
      </div>
    </div>
    

    <div className="flex h-20 justify-center items-center text-white text-base">
      © 2025 Eseek. All rights reserved.
      </div>
    
  </div>
}