import { SignUpDetails } from "../components/login/SignUpDetails";
import { Heading } from "../components/login/Heading"

export const SignUp = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
  
      <div>
        <Heading text="CREATE YOUR ACCOUNT"/>
      </div>

      <div className="bg-transparent flex h-full w-full justify-center items-center pb-20">
        <SignUpDetails />
      </div>

      
    </div>
  );
};
