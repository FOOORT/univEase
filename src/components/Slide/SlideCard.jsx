import Card from "@/src/components/Slide/Card";
const SlideCard = () => {
  const cardData = [
    {
      className: "University Of Rwanda",
      image: "/uni.jpg",
      classType: [
        {
          classTypes: "Economics",
        },
        {
          classTypes: "IT",
        },
        {
          classTypes: "Science",
        },
      ],
    },
    {
      className: "University Of Kigali",
      image: "/univ.jpg",
      classType: [
        {
          classTypes: "Business",
        },
        {
          classTypes: "IT",
        },
        {
          classTypes: "Science",
        },
      ],
    },
    {
      className: "IPRC South Huye Campus",
      image: "/University.jpg",
      classType: [
        {
          classTypes: "Saveying",
        },
        {
          classTypes: "IT",
        },
        {
          classTypes: "Agriculture",
        },
      ],
    },
    {
      className: "IPRC West Karongi Campus",
      image: "/University.png",
      classType: [
        {
          classTypes: "Saveying",
        },
        {
          classTypes: "IT",
        },
        {
          classTypes: "Agriculture",
        },
      ],
    },
    // {
    //   className: "East Africa University",
    //   image: "/University.png",
    //   classType: [
    //     {
    //       classTypes: "Saveying",
    //     },
    //     {
    //       classTypes: "IT",
    //     },
    //     {
    //       classTypes: "Agriculture",
    //     },
    //   ],
    // },
  ];
  return (
    <section>
      <div className="flex gap-4">
        {cardData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default SlideCard;
