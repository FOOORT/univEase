"use client";
import Link from "next/link";
import NavLinks from "@/src/components/Navbar/NavLinks/NavLinks";
import Acount from "@/src/components/Navbar/acount/Acount";
import { useEffect, useState } from "react";
// const isAuthenticated = localStorage.getItem("token") !== null;
const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // This effect runs only once after the component mounts
    const token = localStorage.getItem("token");
    setIsAuthenticated(token !== null);
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <header className="lg:px-20 px-7 flex z-50 justify-between items-center py-2 fixed w-screen ">
          <div className="flex items-center gap-12 capitalize">
            <Link href="/dashboard" className=" text-xl font-bold capitalize ">
              <p className="italic">
                univ<span className="  text-btn ">Ease</span>
              </p>
            </Link>
            <NavLinks />
          </div>
          <Acount />
        </header>
      ) : (
        <header className="lg:px-20 px-7 flex z-50 justify-between items-center py-2 fixed w-screen ">
          <Link href="/" className=" text-xl font-black capitalize ">
            <p className="italic">
              univ<span className="  text-btn ">Ease</span>
            </p>
          </Link>
          <NavLinks />
          <Acount />
        </header>
      )}
    </>
  );
};

export default NavBar;
