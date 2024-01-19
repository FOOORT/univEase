import GetInTouch from "@/src/components/HomePape/GetInTouch";
import Blog from "@/src/components/HomePape/blog/Blog";
import Count from "@/src/components/HomePape/cards/Count";
import Testimonial from "@/src/components/HomePape/testimonial/Testimonial";

const UniversityPage = () => {
  return (
    <>
      <div className="flex items-center justify-center py-20">
        UniversityPage
      </div>
      <Count />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default UniversityPage;
