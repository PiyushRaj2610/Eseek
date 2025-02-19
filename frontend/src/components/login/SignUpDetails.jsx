import { InputField } from "./SignUpBox";
import {useRef} from "react";

export const SignUpDetails = () => {

  const Gamertag = useRef();
  const EmailId = useRef();
  const Password = useRef();
  const Game = useRef();
  const Role = useRef();
  const Achievements = useRef();
  const Clips = useRef();
  const Experience = useRef();
  const TeamName = useRef();

  async function signUp () {
    try {
      const response = await axios.post("backend_url", {
        email: EmailId,
        username: Gamertag,
        password: Password,
        games: Game,
        role: Role
      })
      const data = await response.data;
      const token = data.token;

      localStorage.setItem("token", token)
      
    } catch (error) {
      console.log(error)
    }
  }

  async function getValue () {
    try {
      const response = await axios.get("backend_url", {
        headers: {
          "Authorization" : localStorage.getItem("token")
        }
      })
      const data = await response.data;

      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-2xl p-5 space-y-6 my-6">
      <div className="flex justify-center items-center flex-col pt-12 pb-10 border border-b-white">
      <div className="flex justify-center items-center text-white text-4xl font-semibold tracking-wider">
        <div className="bg-red-300 h-60 w-60 rounded-full overflow-hidden opacity-50 cursor-pointer">
          <img 
            src="./src/assets/dum.jpeg" 
            className="h-full w-full object-cover rounded-full"
            alt="Profile"
          />
        </div>
      </div>
        <div className="text-white pt-4">
          ADD PFP
        </div>

        
      </div>
      <div className="flex justify-center items-center flex-col pt-12 pb-10 border border-b-white">
        <div className="text-white text-4xl font-semibold tracking-wider">
          PERSONAL DETAILS
        </div>

        <InputField label="*Gamertag" ref={Gamertag} placeholder="Enter your unique tag" />
        <InputField label="*Email-Id" ref={EmailId} placeholder="Enter your email-id" />
        <InputField label="*Password" ref={Password} placeholder="Create a new password" />
      </div>

      <div className="flex justify-center items-center flex-col pt-15 pb-10">
        <div className="text-white text-4xl font-semibold tracking-wider">
          GAME INFORMATION
        </div>

        <InputField label="*Game" ref={Game} placeholder="Enter the games you play" />
        <InputField label="*Role" ref={Role} placeholder="Enter your role" />
        <InputField label="*Achievements" ref={Achievements} placeholder="Enter Official/ Unofficial achievements" />
        <InputField label="*Clips" ref={Clips} placeholder="Yes / No" />
        <InputField label="*Experience (in years)" ref={Experience} placeholder="Enter your experience" />
        <InputField label="Team Name (if no - enter NA)" ref={TeamName} placeholder="Enter the name of your team" />
        
      </div>
      <div className="flex justify-center items-center pt-3">
        <button onClick={signUp} className="text-white flex rounded-sm justify-center items-center bg-[#282929] hover:text-black hover:bg-gradient-to-r from-purple-800 to-blue-500 transition-all duration-100 pl-4 pr-4 mt-10 cursor-pointer ">
          SUBMIT
        </button>
      </div>

    </div>
  );
};

