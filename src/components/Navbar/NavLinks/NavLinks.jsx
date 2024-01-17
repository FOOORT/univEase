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
        <div className="px-2 py-2 border border-textSoft rounded-full">
          <IoSearchOutline />
        </div>
      ),
    },
  ];

  return (
    <ul className="hidden lg:flex gap-4 items-center px-3 max-h-8 bg-bgSoft rounded-full py-7 shadow-2xl cursor-pointer ">
      {linkdata.map((item, index) => (
        <li key={index} className=" w-full h-full ">{item.display}</li>
      ))}
    </ul>
  );
};

export default NavLinks;
