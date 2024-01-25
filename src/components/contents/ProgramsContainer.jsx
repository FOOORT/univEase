"use client";
import { useState } from "react";
import Card from "./cards/Card";
import ProgramDetails from "./ProgramDetails";

const ProgramsContainer = ({ datas }) => {
  const [program, setProgram] = useState(false);
  return (
    <div className="py-20 flex flex-col gap-4 w-full">
      <h1 className="font-bold text-lg text-btn">Our exclusive Programs</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {datas.map((item, index) => (
          <div key={index}>
            <Card data={item} activate={setProgram} />
          </div>
        ))}
      </div>
      {program && <ProgramDetails activate={setProgram} />}
    </div>
  );
};

export default ProgramsContainer;
