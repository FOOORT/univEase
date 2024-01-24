import Welcome from "@/src/components/Welcome/Welcome";
import SlideCard from "@/src/components/Slide/SlideCard";
import Carousel from "@/src/components/Slide/Carousel";

const cardData = [
  {
    className: "University Of Rwanda",
    image: "/uni1.jpg",
    classType: [
      { classTypes: "Economics" },
      { classTypes: "IT" },
      { classTypes: "Science" },
    ],
  },
  {
    className: "Adventist University of Central Africa",
    image: "/auca.jpg",
    classType: [
      { classTypes: "Computer" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
  {
    className: "East African University-Rwanda",
    image: "/University.png",
    classType: [
      { classTypes: "Military" },
      { classTypes: "Veterinary" },
      { classTypes: "Politics" },
    ],
  },
  {
    className: "University Of Kigali",
    image: "/univ.jpg",
    classType: [
      { classTypes: "Business" },
      { classTypes: "IT" },
      { classTypes: "Science" },
    ],
  },
  {
    className: "IPRC South Huye Campus",
    image: "/University.jpg",
    classType: [
      { classTypes: "Saving" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
  {
    className: "IPRC West Karongi Campus",
    image: "/uni.jpg",
    classType: [
      { classTypes: "Saving" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
  {
    className: "University Of Rwanda",
    image: "/uni1.jpg",
    classType: [
      { classTypes: "Economics" },
      { classTypes: "IT" },
      { classTypes: "Science" },
    ],
  },
  {
    className: "Adventist University of Central Africa",
    image: "/auca.jpg",
    classType: [
      { classTypes: "Computer" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
  {
    className: "East African University-Rwanda",
    image: "/University.png",
    classType: [
      { classTypes: "Military" },
      { classTypes: "Veterinary" },
      { classTypes: "Politics" },
    ],
  },
  {
    className: "University Of Kigali",
    image: "/univ.jpg",
    classType: [
      { classTypes: "Business" },
      { classTypes: "IT" },
      { classTypes: "Science" },
    ],
  },
  {
    className: "IPRC South Huye Campus",
    image: "/University.jpg",
    classType: [
      { classTypes: "Saving" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
  {
    className: "IPRC West Karongi Campus",
    image: "/uni.jpg",
    classType: [
      { classTypes: "Saving" },
      { classTypes: "IT" },
      { classTypes: "Agriculture" },
    ],
  },
];

const Hero = () => {
  return (
    <section className=" h-screen w-full flex flex-col items-center justify-center bg">
      <Welcome />
      <Carousel cardData={cardData} />
    </section>
  );
};

export default Hero;
