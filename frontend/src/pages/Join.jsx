import { JoinDetails } from "../components/login/JoinDetails";
import { Heading } from "../components/login/Heading"

export const Join = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div>
        <Heading text="LOGIN TO YOUR ACCOUNT"/>
      </div>

      <div className=" flex flex-grow h-full w-full justify-center items-center">
        <JoinDetails />
      </div>
      
    </div>
  );
};
