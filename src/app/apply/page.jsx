import { IoIosSend } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import Button from "@/src/components/Common/Button";
const ApplyPage = () => {
  return (
    <form className="w-full  py-32 flex flex-col gap-4">
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h1 className="text-btn text-md font-bold ">Apply For Programs </h1>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm italic font-semibold">
            Apply with a specialized profile
          </h3>
          <select
            name=""
            id=""
            className="px-3 rounded-xl outline-none border w-full md:w-1/5 py-2 border-gray-300"
          >
            <option>General Profile</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h3 className="text-btn text-md font-bold ">Programs Details</h3>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl fonta font-semibold">Computer Science</h2>
          <h2 className="flex gap-3 items-center">
            <IoIosSend />{" "}
            <span className="text-sm font-medium ">Huye, Rwanda</span>
          </h2>
          <p>
            in Computer Science bachelor’s program, you’ll explore the different
            ways that humans interact with technology to glean a practical
            understanding of how software affects our everyday lives. You’ll
            build foundations in the design, development, and implementation of
            software-based solutions for business, entertainment, and consumer
            markets. Project and portfolio courses integrated throughout the
            program provide you with relevant learning opportunities, and career
            development modules help you build professional skills along the
            way.
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-btn text-sm font-bold ">
              <BsGlobe />
              <Link href="/program" className="italic">
                View Course Posting
              </Link>
            </p>
            <hr className="bg-gray-400" />
          </div>
          <h3 className="text-btn text-md font-bold ">Programs Tags</h3>
          <div className="flex items-center gap-2">
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default ApplyPage;
