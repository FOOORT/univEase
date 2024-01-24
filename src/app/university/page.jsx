import GetInTouch from "@/src/components/home/GetInTouch";
import Blog from "@/src/components/home/blog/Blog";
import Count from "@/src/components/home/cards/Count";
import Testimonial from "@/src/components/home/testimonial/Testimonial";
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
