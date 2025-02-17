import "../components/styles/Appbar.css";
import { Button } from "./login/Button";


export const Appbar = () => {
  return <div className=" h-20 flex flex-row items-center justify-center pl-10 border-b-[0.5px] border-white">
    <div className=" h-full w-full flex flex-start  items-center pt-0">
      <div className="w-full cursor-pointer text-3xl font-bold tracking-widest">
        E-SEEK
        {/* <img src={mainLogo} alt="Description" width="60" /> */}
      </div>

    </div>

    <div className=" h-full w-full flex justify-between mr-10 items-center ">
      <div className="flex items-center pl-112">
        <Button>Sign In</Button>
      </div>
      <div className="flex justify-content items-center pr-20">
        <Button>Join</Button>
      </div>
            
    </div>
    {/* <div className="bg-black h-16 w-full flex items-center justify-center pt-4">
      A professional networking platform for gamers and esports professionals    

      </div> */}


  </div>
}