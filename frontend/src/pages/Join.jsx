import { JoinDetails } from "../components/login/JoinDetails";

export const Join = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col pb-20">
      <div className="border-b-[0.5px] border-white pt-10 pb-10 h-30 w-full mt-5 flex justify-center items-center text-8xl font-extrabold tracking-widest cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#282929] to-[#282929] hover:from-purple-700 hover:to-blue-400 transition-colors duration-500">
        LOGIN TO YOUR ACCOUNT
      </div>

      <div className="bg-transparent flex h-full w-full justify-center items-center">
        <JoinDetails />
      </div>
    </div>
  );
};
