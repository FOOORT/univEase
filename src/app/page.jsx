import Hero from "@/src/components/home/Hero";
import Partners from "@/src/components/home/Partners/Partners";
import Testimonial from "@/src/components/home/testimonial/Testimonial";
import Blog from "@/src/components/home/blog/Blog";
import GetInTouch from "@/src/components/home/GetInTouch";
import Count from "@/src/components/home/cards/Count";
import About from "@/src/components/home/About";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Count />
      <Partners />
      <Blog />
      <Testimonial />
      <GetInTouch />
    </main>
  );
}
