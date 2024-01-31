"use client";
import React from "react";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href="/university">
      <div className="rounded-3xl relative shadow-2xl min-w-[30vh] h-[30vh] duration-150 hover:-translate-y-4 cursor-pointer">
        <img
          src={data.image}
          fill
          alt="Image Card"
          className="rounded-3xl h-full w-full"
        />
        <div className="absolute w-full h-full flex flex-col justify-between right-0 top-0 rounded-3xl p-2 pb-4 pl-4 bg-gradient-to-t from-dark to-dark/10">
          <div className="w-full flex justify-end items-center">
            <button className="py-2 px-4 bg-btn rounded-3xl text-bgColor text-sm ">
              Open
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-md text-bgColor text-nowrap ">
              {data.className}
            </h2>
            <div className="flex items-center text-bgColor  gap-4">
              {data.classType.map((type, index) => (
                <span
                  key={index}
                  className="border border-white px-3 py-2 text-xs font-medium rounded-full hover:bg-white hover:text-dark cursor-pointer scale-105 duration-150 active:scale-95"
                >
                  {type.classTypes}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
