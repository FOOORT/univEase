"use client";
import Link from "next/link";
import NavLinks from "@/src/components/Navbar/NavLinks/NavLinks";
import Acount from "@/src/components/Navbar/acount/Acount";
import { useEffect, useRef } from "react";
const NavBar = () => {
  const headerRef = useRef(null);
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky-header");
        } else {
          headerRef.current.classList.remove("sticky-header");
        }
      }
    });
  };
  useEffect(() => {
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      ref={headerRef}
      className="lg:px-16 px-10 flex min-h-24 max-h-28 z-50 justify-between items-center"
    >
      <Link href="/" className=" text-2xl font-extrabold  uppercase ">
        univease
      </Link>
      <NavLinks />
      <Acount />
    </header>
  );
};

export default NavBar;
