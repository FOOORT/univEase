import { FaRegUser } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
import Cards from "./Cards";
const Count = () => {
  const cardsDataz = [
    { icon: <FaRegUser />, number: 1, title: "Create Profile" },
    { icon: <BsBank />, number: 2, title: "Shortlist University" },
    { icon: <SiMinutemailer />, number: 3, title: "Send Application" },
    { icon: <TiTick />, number: 4, title: "Get admission" },
  ];
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-7 ">
      {cardsDataz.map((item, index) => (
        <Cards key={index} data={item} />
      ))}
    </div>
  );
};

export default Count;
