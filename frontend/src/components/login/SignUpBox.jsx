export const InputField = ({ label, placeholder }) => {
  return (
    <div className="bg-transparent p-3 rounded-md w-full">
      <label className="block text-gray-300 mb-1 tracking-wide hover:text-white">
        {label}
      </label>
      <input
        className="border-2 rounded-md border-[#282929] h-10 w-full bg-black text-white placeholder:text-gray-500 p-2 hover:border-white"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
