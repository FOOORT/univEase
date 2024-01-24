import GetInTouch from "@/src/components/home/GetInTouch";
import Blog from "@/src/components/home/blog/Blog";
import Count from "@/src/components/home/cards/Count";
import Testimonial from "@/src/components/home/testimonial/Testimonial";
import Welcome from "@/src/components/Common/Welcome";
import Contents from "@/src/components/contents/Contents";
import Programs from "@/src/components/static/programs";

const UniversityPage = () => {
  return (
    <div className="flex flex-col gap-3 py-20 pt-[25vh]">
      <Welcome
        badge="University of Rwanda is a public collegiate"
        title="University Of Rwanda"
      />
      <Contents datas={Programs} />
      <Count />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </div>
  );
};

export default UniversityPage;
