import { IoIosClose } from "react-icons/io";
import Button from "../Common/Button";
import Image from "next/image";
const SignupOnboard = () => {
  return (
    <div className="h-screen absolute top-0 left-0 w-full bg-gradient-to-br from-dark to-dark/10 text-dark flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-bgColor gap-3 rounded-3xl w-1/2 h-[61vh] text-dark  ">
        <div className="flex flex-col cursor-pointer justify-between px-6 py-4">
          <span className="border border-dark px-1 py-1 rounded-full w-fit">
            <IoIosClose />
          </span>
          <div className="flex flex-col gap-3">
            <h2 className="text-md font-bold">Who are you?</h2>
            <div className="flex flex-col gap-2">
              <small className="text-sm font-bold">
                help us direct you as well
              </small>
              <div className="flex gap-1 text-dark">
                <Button
                  title="University"
                  path="#"
                  classes={`bg-dark text-white `}
                />
                <Button
                  title="Student"
                  path="#"
                  classes={`bg-transparent border border-dark text-black `}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-1 mr-1 h-[60vh] lg:w-[333px] w-full">
          <Image src="/signup1.png" fill={true} alt="Ifoto" />
        </div>
      </div>
    </div>
  );
};

export default SignupOnboard;
