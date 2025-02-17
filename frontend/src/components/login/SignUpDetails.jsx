import { InputField } from "./SignUpBox";

export const SignUpDetails = () => {
  return (
    <div className="w-full max-w-2xl p-5 space-y-6 my-6">
      <div className="flex justify-center items-center flex-col pt-12">
        <div className="text-white text-4xl font-semibold tracking-wider">
          PERSONAL DETAILS
        </div>

        <InputField label="*Gamertag" placeholder="Enter your unique tag" />
        <InputField label="*Email-Id" placeholder="Enter your email-id" />
        <InputField label="*Password" placeholder="Create a new password" />
      </div>

      <div className="flex justify-center items-center flex-col pt-12">
        <div className="text-white text-4xl font-semibold tracking-wider">
          GAME INFORMATION
        </div>

        <InputField label="*Game" placeholder="Enter the games you play" />
        <InputField label="*Role" placeholder="Enter your role" />
        <InputField label="*Achievements" placeholder="Enter Official/ Unofficial achievements" />
        <InputField label="*Clips" placeholder="Yes / No" />
        <InputField label="*Experience (in years)" placeholder="Enter the experience" />
        <InputField label="*Enter your team (if any)" placeholder="Enter the name of your team" />
      </div>
    </div>
  );
};
