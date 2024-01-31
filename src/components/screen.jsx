import React from "react";

const Screen = () => {
  return (
    <ul className="fixed bottom-0 left-0 m-4 px-4 py-2 bg-slate-950 rounded-md z-50 text-white">
      <li className=" block sm:hidden md:hidden lg:hidden xl:hidden">xs</li>
      <li className=" hidden sm:block md:hidden lg:hidden xl:hidden">sm</li>
      <li className=" hidden sm:hidden md:block lg:hidden xl:hidden">md</li>
      <li className=" hidden sm:hidden md:hidden lg:block xl:hidden">lg</li>
      <li className=" hidden sm:hidden md:hidden lg:hidden xl:block">xl</li>
    </ul>
  );
};

export default Screen;
