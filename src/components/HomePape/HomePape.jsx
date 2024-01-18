import LeftCard from "@/src/components/HomePape/cards/LeftCard";
import RightCard from "@/src/components/HomePape/cards/RightCard";
import Cards from "@/src/components/HomePape/cards/Cards";
import Partners from "@/src/components/HomePape/Partners/Partners";
import { FaRegUser } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
const HomePape = () => {
  const cardsDataz = [
    { icon: <FaRegUser />, number: 1, title: "Create Profile" },
    { icon: <BsBank />, number: 2, title: "Shortlist University" },
    { icon: <SiMinutemailer />, number: 3, title: "Send Application" },
    { icon: <TiTick />, number: 4, title: "Get admission" },
  ];
  return (
    <>
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        <LeftCard />
        <RightCard />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-7 ">
        {cardsDataz.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
      <Partners />
    </>
  );
};

export default HomePape;
