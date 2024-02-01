"use client";
import { useEffect, useState } from "react";
import ProgramCardCard from "./cards/ProgramCard";
import ProgramDetails from "./ProgramDetails";
import axios from "axios";
import Loading from "@/src/app/loading";
const ProgramsContainer = ({ selectedUniversityId }) => {
  const [program, SetProgram] = useState([]);
  const [setdatas, setProgram] = useState(false);
  useEffect(() => {
    const getProgram = async () => {
      try {
        const program = await axios.get(
          "https://univease.onrender.com/api/v1/program/read"
        );
        const response = await program.data.data;
        console.log("Program Data", response);
        if (response) {
          SetProgram(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProgram();
  }, []);

  const filteredPrograms = program.filter(
    (item) => item.campus?._id === selectedUniversityId
  );

  return (
    <div className="py-20 flex flex-col gap-4 w-full">
      <h1 className="font-bold text-lg text-btn">Our exclusive Programs</h1>
      <div className=" relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((item, index) => (
            <div key={index}>
              <ProgramCardCard data={item} activate={setProgram} />
            </div>
          ))
        ) : (
          <div className=" absolute  flex justify-center items-center w-full">
            <Loading />
          </div>
        )}
      </div>
      {setdatas && <ProgramDetails activate={setProgram} />}
    </div>
  );
};

export default ProgramsContainer;
