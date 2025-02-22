import { InputField } from "../SignUpPageComponents/SignUpBox";

export const JoinDetails = () => {
  return (
    <div className="w-full max-w-2xl p-5 space-y-6 my-6">
      <div className="flex justify-center items-center flex-col pt-12 pb-10 ">
        <div className="text-white text-4xl font-semibold tracking-wider">
          LOGIN CREDENTIALS
        </div>

        <InputField label="*username" placeholder="Enter username / email" />
        <InputField label="*password" placeholder="Enter your password" />
      </div>

      <div className="flex justify-center items-center pt-3">
        <button className="text-white flex rounded-sm justify-center items-center bg-[#282929] hover:text-black hover:bg-gradient-to-r from-purple-800 to-blue-500 transition-all duration-100 pl-4 pr-4 mt-10 cursor-pointer ">
          LOGIN
        </button>
      </div>

    </div>
  );
};
