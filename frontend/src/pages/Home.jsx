import { Appbar } from "../components/HomeComponents/Appbar";
import { HomeBgVideo } from "../components/HomeBgVideo";

export const Home = () => {
  return (
    <div className="bg-black h-full flex flex-col z-0">
      <div className=" text-white h-[80px]  z-10 ">
        <Appbar />
      </div>



      <div className="text-white bg-black flex-grow h-[720px] w-[full] flex flex-col z-10">
        <HomeBgVideo />
        
      </div>
      <div className="  border-[#282929] border-t-[0.5px] flex justify-center items-center ">
        <a 
          href="https://github.com/PiyushRaj2610" 
          target="_blank" 
          
          className="flex justify-center items-center bg-black text-2xl tracking-widest 
           font-extrabold cursor-pointer text-transparent bg-clip-text 
          bg-gradient-to-r from-[#282929] to-[#282929] hover:from-purple-700 
          hover:to-blue-400 transition-colors duration-200">
          D E V E L O P E D - B Y - P I Y U S H
        </a>
      </div>
           
    </div>
  );
};
