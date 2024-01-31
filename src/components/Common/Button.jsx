"use client";
import React from "react";
import Link from "next/link";

const Button = ({ icon, path, title, classes }) => {
  return (
    <>
      <Link
        href={path}
        className={`${classes} bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-3 scale-95 hover:scale-100 active:scale-95 duration-100`}
      >
        {icon}
        {title}
      </Link>
    </>
  );
};

export default Button;
