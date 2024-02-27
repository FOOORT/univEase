"use client"
// import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react"; // Import useEffect and useState

const NavLinks = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // This effect runs only once after the component mounts
    const token = localStorage.getItem("token");
    setIsAuthenticated(token !== null);
  }, []); // Empty dependency array means this effect runs once on mount

  // const linkdata = [
  //   {
  //     display: "Program",
  //   },
  //   {
  //     display: "College",
  //   },
  //   {
  //     display: "Location",
  //   },
  //   {
  //     display: (
  //       <div className="px-1 py-1 border border-dark rounded-full">
  //         <IoSearchOutline />
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <>
      {isAuthenticated ? (
        <ul className="flex items-center gap-3 font-medium text-sm">
          <li>find course</li>
          <li>my applications</li>
          <li>report</li>
          <li>messages</li>
        </ul>
      ) : (
        <nav className="hidden md:flex gap-1 items-center p-[2px] bg-slate-200 rounded-full text-sm scale-[0.96] hover:scale-[0.99] duration-100">
          <button className="hover:bg-dark hover:text-slate-100 scale-95 hover:scale-100 duration-150 rounded-l-full h-12 px-6">
            Program
          </button>
          <button className="hover:bg-dark hover:text-slate-100 scale-95 hover:scale-100 duration-150 h-12 px-6">
            Colleges
          </button>
          <button className="hover:bg-dark hover:text-slate-100 scale-95 hover:scale-100 duration-150 h-12 px-6 rounded-r-full">
            Location
          </button>
          <button className="border border-dark hover:bg-dark hover:text-slate-100 scale-95 hover:scale-100 duration-150 h-12 w-12 rounded-full flex justify-center items-center">
            <FiSearch className="text-lg scale-110" />
          </button>
        </nav>
      )}
    </>
  );
};

export default NavLinks;
