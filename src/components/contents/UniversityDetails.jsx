import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TfiArrowTopRight } from "react-icons/tfi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Button from "../Common/Button";

import { FaLocationArrow } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import axios from "axios";

const UniversityDetails = ({ activate }) => {
  const [program, SetProgram] = useState({});
  let id =
    typeof window !== "undefined" ? localStorage.getItem("universityId") : null;
  useEffect(() => {
    const getUniversity = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
      try {
        const program = await axios.get(`${apiUrl}university/read/${id}`);
        const response = await program.data.data;
        console.log("Unive Data", response);
        if (response) {
          SetProgram(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUniversity();
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
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-6">
              <h1 className="fonta capitalize  text-nowrap ">
                {program?.universityName}
              </h1>
              <small className="text-sm capitalize italic ">
                posted last 10 month Ago
              </small>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <h2 className="flex gap-2 items-center">
                  <FaLocationArrow className="text-sm " />
                  <span className="text-sm font-medium capitalize ">
                    {program?.city}, {program?.country}
                  </span>
                </h2>
                <p className="flex items-center gap-2 text-btn text-sm font-medium ">
                  <BsGlobe />
                  <p className="italic">Website</p>
                </p>
              </div>
            </div>

            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                University Mission
              </h2>
              <p className="text-sm">{program?.mission}</p>
            </div>

            <div className="flex gap-4 items-center mt-8">
              <Button
                path="/university"
                icon={<TfiArrowTopRight />}
                title="Vist university"
                classes="text"
              />
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-4">
            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">
                About University
              </h2>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Email: {program?.email}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Phone number: {program?.phoneNumbers}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill />
                Location: {program?.country}
              </li>
            </div>

            <div className=" text-4xl border-2 border-slate-200/60 p-4 rounded-xl flex flex-col gap-4">
              <h2 className="text-blue-500 text-lg font-medium">Programs</h2>
              {program?.program?.map((component) => (
                <li className="flex items-center gap-2 text-sm">
                  <RiVerifiedBadgeFill />
                  {component.name}
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

export default UniversityDetails;
