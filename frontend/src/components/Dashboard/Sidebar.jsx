export const Sidebar = () => {
  return (
    <div className="w-60 p-4 flex flex-col gap-y-8 text-white ">
      {["Home","Games", "Notifications", "Clips", "About"].map((item, index) => (
        <button
          key={index}
          className="p-5 rounded-lg tracking-wide text-2xl font-medium  bg-black hover:bg-gray-700 
          cursor-pointer transition-all duration-200 transform hover:scale-110 hover:shadow-md hover:shadow-blue-500/50"
        >
          {item}
        </button>
      ))}
    </div>
  );
};
