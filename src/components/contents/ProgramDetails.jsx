import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TfiArrowTopRight } from "react-icons/tfi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";

const ProgramDetails = ({ activate }) => {
  return (
    <div className="fixed h-screen w-screen bg-gray-900/25 top-0 left-0 z-50">
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
          <div className="w-[60%]">
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl">
              <h1>Computer sciences</h1>
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
              <li className="flex items-center gap-2 text-sm bg-slate-100">
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
