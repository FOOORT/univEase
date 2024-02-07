import { IoIosClose } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Button from "../Common/Button";
import Image from "next/image";

const SignupOnboard = ({
  setOpen,
  title,
  subtitle,
  ifoto,
  inputs,
  reset,
  buttons,
  height,
}) => {
  return (
    <div
      className="h-screen absolute top-0 left-0 w-full bg-gray-900/40 text-dark flex items-center justify-center "
      // onClick={() => setOpen(false)}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 bg-bgColor gap-3 rounded-3xl w-1/2 text-dark ${
          height ? `h-${height}` : ""
        }`}
      >
        <div className="flex flex-col cursor-pointer justify-between px-6 py-4">
          <span
            className="border border-dark px-1 py-1 rounded-full w-fit"
            onClick={() => setOpen(false)}
          >
            <IoIosClose />
          </span>
          <div className="flex flex-col gap-3 !w-full">
            <h2 className="text-md font-bold mt-1">{title ? title : title}</h2>
            {inputs ? (
              <form className="flex flex-col gap-2 !w-full">
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="py-2 px-4 rounded-xl outline-none border border-dark"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="py-2 px-4 rounded-xl outline-none border border-dark "
                />
                <Button
                  title="Continue"
                  classes="bg-dark  !text-white w-full rounded-xl !scale-100"
                />
                <div className="flex justify-between">
                  <div className="py-[1px] px-[1px] rounded-full border border-dark flex items-center justify-center ">
                    <IoIosCheckmark />
                  </div>
                  <h2 className="text-sm font-bold ">
                    {reset ? reset : reset}
                  </h2>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    icon={<FaGithub />}
                    classes="bg-dark  px-1 !text-white w-full rounded-xl text-nowrap !scale-100"
                  />
                  <Button
                    icon={<SiGmail />}
                    classes="bg-dark  !text-white w-full rounded-xl  text-nowrap !scale-100"
                  />
                </div>
                <h5 className="text-sm font-medium ">
                  Not a member yet?{" "}
                  <span className="text-sm font-black">Join now</span>
                </h5>
                <p className="text-sm font-medium ">
                  By joining, you agree to the Fiverr Pro Terms of Service, and
                  to occasionally receive emails from us. Read our Privacy
                  Policy to learn how we use your personal data.
                </p>
              </form>
            ) : null}
            <div className="flex flex-col gap-2">
              <small className="text-sm font-bold">
                {subtitle ? subtitle : subtitle}
              </small>
              {buttons ? (
                <div className="flex gap-1 text-dark">
                  <Button
                    title="University"
                    classes={`bg-dark text-white border border-dark `}
                  />
                  <Button
                    title="Student"
                    classes="bg-transparent border border-dark !text-dark"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div
          className={`relative  w-full hidden md:block lg:items-center  ${
            height ? `h-${height}` : "h-[60vh]"
          }`}
        >
          <Image
            src={ifoto ? ifoto : ifoto}
            layout="fill"
            objectfit="cover"
            alt="Ifoto"
            className="rounded-3xl p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupOnboard;
