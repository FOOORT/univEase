"use client";
import Link from "next/link";
import NavLinks from "@/src/components/Navbar/NavLinks/NavLinks";
import Acount from "@/src/components/Navbar/acount/Acount";
const NavBar = () => {
  return (
    <header className="lg:px-20 px-7 flex z-50 justify-between items-center py-2 fixed w-screen ">
      <Link href="/" className=" text-xl font-black  uppercase ">
        univease
      </Link>
      <NavLinks />
      <Acount />
    </header>
  );
};

export default NavBar;
