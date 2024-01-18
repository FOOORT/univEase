import Card from "@/src/components/HomePape/Partners/cards/Card";
import Link from "next/link";

const Partners = () => {
  const partnerData = [
    {
      campusName: "University Of Rwanda",
      image: "/uni1.jpg",
      location: "Rwanda",
      place: "Huye",
    },
    {
      campusName: "East African University-Rwanda",
      image: "/University.png",
      location: "Rwanda",
      place: "Kigali",
    },
    {
      campusName: "Adventist University of Central Africa",
      image: "/auca.jpg",
      location: "Rwanda",
      place: "Huye",
    },
    {
      campusName: "University Of Kigali",
      image: "/univ.jpg",
      location: "Rwanda",
      place: "Kigali",
    },
    {
      campusName: "IPRC West Karongi Campus",
      image: "/uni.jpg",
      location: "Rwanda",
      place: "Karongi",
    },
    {
      campusName: "IPRC South Huye Campus",
      image: "/University.jpg",
      location: "Rwanda",
      place: "Huye",
    },
  ];

  return (
    <div className="container py-20 flex flex-col gap-4">
      <h1 className="font-bold text-lg text-btn">Our Exclusive Partners</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {partnerData.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 || index === 4 ? "lg:col-span-2 " : "col-span-1"
            }`}
          >
            <Link href="/university">
              <Card data={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;