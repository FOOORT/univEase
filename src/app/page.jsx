import Hero from "@/src/components/home/Hero";
import Contents from "@/src/components/contents/Contents";
import Testimonial from "@/src/components/home/testimonial/Testimonial";
import Blog from "@/src/components/home/blog/Blog";
import GetInTouch from "@/src/components/home/GetInTouch";
import Count from "@/src/components/home/cards/Count";
import About from "@/src/components/home/About";
import Universities from "@/src/components/static/universities";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Count />
      <Contents datas={Universities} />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </main>
  );
}
