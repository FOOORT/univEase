import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-12 py-4 text-black w-full flex font-semibold items-center justify-between">
      <ul className="flex gap-3 items-center">
        <li>
          <Link href="">Univerties</Link>
        </li>
        <li>
          <Link href="">Students</Link>
        </li>
        <li>
          <Link href="">Knowledgebase</Link>
        </li>
        <li>
          <Link href="">Services</Link>
        </li>
      </ul>
      <h1 className=" italic text-lg font-bold text-blue-500">
        Univ
        <span className="bg-blue-500  text-white rounded-md py-2 px-4">
          Ease
        </span>
      </h1>
      <ul className="flex gap-3 items-center">
        <li>
          <Link href="">About Us</Link>
        </li>
        <li>
          <Link href="">How It Work</Link>
        </li>
        <li>
          <Link href="">Our blog</Link>
        </li>
        <li>
          <Link href="">Contact us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
