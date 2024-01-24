import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
const NavLinks = () => {
  const linkdata = [
    {
      display: "Program",
    },
    {
      display: "College",
    },
    {
      display: "Location",
    },
    {
      display: (
        <div className="px-1 py-1 border border-dark rounded-full">
          <IoSearchOutline />
        </div>
      ),
    },
  ];

  return (
    // <ul className="hidden lg:flex gap-4 items-center px-4 max-h-6 bg-bgSoft rounded-full py-6 shadow-lg shadow-gray-100 cursor-pointer ">
    //   {linkdata.map((item, index) => (
    //     <li key={index} className=" w-full h-full font-medium ">
    //       {item.display}
    //     </li>
    //   ))}
    // </ul>
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
      <button className="border border-dark hover:bg-dark hover:text-slate-100 scale-95 hover:scale-100  duration-150 h-12 w-12 rounded-full flex justify-center items-center">
        <FiSearch className="text-lg scale-110" />
      </button>
    </nav>
  );
};

export default NavLinks;
