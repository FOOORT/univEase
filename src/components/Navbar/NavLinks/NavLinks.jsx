import { IoSearchOutline } from "react-icons/io5";
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
        <div className="px-1 py-1 border border-textSoft rounded-full">
          <IoSearchOutline />
        </div>
      ),
    },
  ];

  return (
    <ul className="hidden lg:flex gap-4 items-center px-4 max-h-6 bg-bgSoft rounded-full py-6 shadow-2xl cursor-pointer ">
      {linkdata.map((item, index) => (
        <li key={index} className=" w-full h-full font-medium ">
          {item.display}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
