import LeftCard from "@/src/components/HomePape/cards/LeftCard";
import RightCard from "@/src/components/HomePape/cards/RightCard";
import Partners from "@/src/components/HomePape/Partners/Partners";
import Testimonial from "@/src/components/HomePape/testimonial/Testimonial";
import Blog from "@/src/components/HomePape/blog/Blog";
import GetInTouch from "@/src/components/HomePape/GetInTouch";
import Count from "@/src/components/HomePape/cards/Count";

const HomePape = () => {
  return (
    <>
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        <LeftCard />
        <RightCard />
      </div>
      <Count />
      <Partners />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default HomePape;
