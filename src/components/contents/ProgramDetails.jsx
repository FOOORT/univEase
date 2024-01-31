import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TfiArrowTopRight } from "react-icons/tfi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Button from "../Common/Button";
import { HiOutlineHeart } from "react-icons/hi2";

const ProgramDetails = ({ activate }) => {
  return (
    <div className="fixed h-screen w-screen bg-gray-900/30 top-0 left-0 z-50">
      <div className="w-[30vw] h-screen" onClick={() => activate(false)}></div>
      <div className="fixed right-0 top-0 h-screen w-[70vw] bg-white rounded-s-3xl p-12">
        <div className="flex w-full items-center justify-between">
          <button
            className=" p-2 rounded-full border-2 border-blue-500 text-blue-500 scale-95 hover:scale-100 duration-100"
            onClick={() => activate(false)}
          >
            <IoIosArrowBack />
          </button>
          <div className="flex items-center text-blue-500 text-sm font-semibold gap-2">
            <p>Open in new window</p>
            <TfiArrowTopRight />
          </div>
        </div>

        <div className="w-full flex items-start gap-4 mt-8">
          <div className="w-[60%] flex flex-col gap-4">
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl">
              <h1 className="fonta uppercase">Computer sciences</h1>
              <h4 className=" text-sm mt-4 font-bold">
                “Connected” is just the beginning.
              </h4>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Program Details
              </h2>
              <li className="text-left text-sm p-3">
                in Computer Science bachelor’s program, you’ll explore the
                different ways that humans interact with technology to glean a
                practical understanding of how software affects our everyday
                lives. You’ll build foundations in the design, development,
                and implementation of software-based solutions for business,
                entertainment, and consumer markets. Project and portfolio
                courses integrated throughout the program provide you with
                relevant learning opportunities, and career development modules
                help you build professional skills along the way.
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Program at Grance
              </h2>

              <h3 className="font-bold text-base">Ways to learn</h3>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                On Campus
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Online Study
              </li>

              <h3 className="font-bold text-base">Related Program</h3>
              <li className="flex items-center gap-2 text-sm border border-slate-200 rounded-md px-4 py-2 text-slate-500 hover:text-blue-500 duration-100 cursor-pointer">
                Computer Science Bachelor's Completion | Artificial Intelligence
                Concentration
                <TfiArrowTopRight />
              </li>
              <li className="flex items-center gap-2 text-sm border border-slate-200 rounded-md px-4 py-2 text-slate-500 hover:text-blue-500 duration-100 cursor-pointer">
                Computer Science Bachelor's Completion | Mobile Development
                Concentration
                <TfiArrowTopRight />
              </li>
            </div>

            <div className="flex gap-4 items-center mt-8">
              <Button
                path="/Apply"
                icon={<TfiArrowTopRight />}
                title="Apply now"
                classes="text"
              />
              <Button
                path="/Apply"
                icon={<HiOutlineHeart />}
                title="Save"
                classes="!bg-white !text-dark border border-slate-500 text-slate-500"
              />
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-4">
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Tuition and Fees
              </h2>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Registration $100
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Full Schoraship
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Hostel available
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Degree Level
              </h2>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Bachelor of Science Degree
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Included Components
              </h2>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                MSI GE Raider Laptop
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                MSI 3-yr Warranty
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Microsoft Office 365
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Mat-Lab
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                MS Visual Studio Pro (Download) (WIN)
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">Link</h2>
              <li className="flex items-center gap-2 text-sm bg-slate-100 px-4 py-3 rounded-md text-slate-400">
                <IoCopyOutline />
                https://univease.com/ur/computerSc
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
