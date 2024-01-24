import LeftCard from "@/src/components/home/cards/LeftCard";
import RightCard from "@/src/components/home/cards/RightCard";

const About = () => {
  return (
    <>
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <LeftCard />
        <RightCard />
      </div>
    </>
  );
};

export default About;
