export const Page = ({ children }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Main Content - Uses flex-grow to push footer down */}
      <div className="flex-grow flex flex-col">{children}</div>

      {/* Footer - Fixed Position */}
      <div className="border-[#282929] border-t-[0.5px] flex justify-center items-center p-4">
        <a 
          href="https://github.com/PiyushRaj2610" 
          target="_blank" 
          className="flex justify-center items-center bg-black text-2xl tracking-widest 
          font-extrabold cursor-pointer text-transparent bg-clip-text 
          bg-gradient-to-r from-[#282929] to-[#282929] hover:from-purple-700 
          hover:to-blue-400 transition-colors duration-500">
          D E V E L O P E R  {" - > "} P I Y U S H
        </a>
      </div>
    </div>
  );
};
