import GetInTouch from "@/src/components/HomePape/GetInTouch";
import Blog from "@/src/components/HomePape/blog/Blog";
import Count from "@/src/components/HomePape/cards/Count";
import Testimonial from "@/src/components/HomePape/testimonial/Testimonial";
import Welcome from "@/src/app/university/welcome/Welcome";
import Program from "@/src/app/university/program/Program";

const UniversityPage = () => {
  return (
    <>
      <div className="flex flex-col gap-6 container py-20">
        <Welcome />
        <Program />
      </div>

      <Count />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default UniversityPage;
