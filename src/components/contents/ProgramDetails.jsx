import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TfiArrowTopRight } from "react-icons/tfi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Button from "../Common/Button";
import { HiOutlineHeart } from "react-icons/hi2";
import axios from "axios";

const ProgramDetails = ({ activate }) => {
  const [program, SetProgram] = useState({});
  let id =
    typeof window !== "undefined" ? localStorage.getItem("programId") : null;
  useEffect(() => {
    const getProgram = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
      try {
        const program = await axios.get(`${apiUrl}program/read/${id}`);
        const response = await program.data.data;
        console.log("ProgramForm Data", response);
        if (response) {
          SetProgram(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProgram();
  }, [id]);

  return (
    <div className="fixed h-screen w-screen bg-gray-900/30 top-0 left-0 z-50">
      <div className="w-[30vw] h-screen" onClick={() => activate(false)}></div>
      <div className="fixed right-0 top-0 h-screen lg:w-[70vw] w-full bg-white rounded-s-3xl p-12 overflow-y-auto">
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
              <h1 className="fonta capitalize  text-nowrap ">
                {program?.name}
              </h1>
              <h4 className=" text-sm mt-4 font-bold">
                “Connected” is just the beginning.
              </h4>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Program Details
              </h2>
              <li className="text-left text-sm p-3">
                {program?.degreeOverview}
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Program at Grance
              </h2>

              <h3 className="font-bold text-base">Ways to learn</h3>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                {program.programExtension?.wayTolearn[0]}
              </li>
              {program.programExtension?.wayTolearn[1] ? (
                <li className="flex items-center gap-2 text-sm">
                  <RiVerifiedBadgeFill />
                  {program.programExtension?.wayTolearn[1]}
                </li>
              ) : null}

              <h3 className="font-bold text-base">Related Program</h3>
              <li className="flex items-center gap-2 text-sm border border-slate-200 rounded-md px-4 py-2 text-slate-500 hover:text-blue-500 duration-100 cursor-pointer">
                {program.programExtension?.related?.map((relate) => (
                  <>
                    {program?.name} Bachelor's Completion | {relate}
                  </>
                ))}
                <TfiArrowTopRight />
              </li>
            </div>

            <div className="flex gap-4 items-center mt-8">
              <Button
                path="/apply"
                icon={<TfiArrowTopRight />}
                title="Apply now"
                classes="text"
              />
              <Button
                path="/apply"
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
                Registration ${program?.tuitionAndFees?.registration}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Scholarship {program?.tuitionAndFees?.scholarship}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Hostel {program?.tuitionAndFees?.hostel}
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Degree Level
              </h2>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                {program?.degree}
              </li>
            </div>
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                Included Components
              </h2>
              {program?.components?.map((component) => (
                <li className="flex items-center gap-2 text-sm">
                  <RiVerifiedBadgeFill />
                  {component}
                </li>
              ))}
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
