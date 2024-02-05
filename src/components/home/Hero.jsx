import Welcome from "@/src/components/Common/Welcome";
import CardData from "@/src/components/static/homeCarousel";
import Carousel from "@/src/components/Slide/Carousel";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
      <Welcome
        badge="Over 3 million ready-to-expand skills!"
        title="Study with the world’s top featured Colleges."
        desc="Connect with millions of top-rated University & colleges around the world."
      />
      <Carousel cardData={CardData} />
    </section>
  );
};

export default Hero;
