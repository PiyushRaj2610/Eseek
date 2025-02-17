import { InputField } from "./SignUpBox";

export const SignUpDetails = () => {
  return (
    <div className="w-full max-w-2xl p-5 space-y-6 my-6">
      <div className="flex justify-center items-center flex-col pt-12 pb-10 border border-b-white">
        <div className="text-white text-4xl font-semibold tracking-wider">
          PERSONAL DETAILS
        </div>

        <InputField label="*Gamertag" placeholder="Enter your unique tag" />
        <InputField label="*Email-Id" placeholder="Enter your email-id" />
        <InputField label="*Password" placeholder="Create a new password" />
      </div>

      <div className="flex justify-center items-center flex-col pt-15 pb-10">
        <div className="text-white text-4xl font-semibold tracking-wider">
          GAME INFORMATION
        </div>

        <InputField label="*Game" placeholder="Enter the games you play" />
        <InputField label="*Role" placeholder="Enter your role" />
        <InputField label="*Achievements" placeholder="Enter Official/ Unofficial achievements" />
        <InputField label="*Clips" placeholder="Yes / No" />
        <InputField label="*Experience (in years)" placeholder="Enter your experience" />
        <InputField label="*Team Name (if no - enter NA)" placeholder="Enter the name of your team" />
        
      </div>
      <div className="flex justify-center items-center pt-3">
        <button className="text-white flex rounded-sm justify-center items-center bg-[#282929] hover:text-black hover:bg-gradient-to-r from-purple-800 to-blue-500 transition-all duration-100 pl-4 pr-4 mt-10 cursor-pointer ">
          SUBMIT
        </button>
      </div>

    </div>
  );
};
