import Card from "@/src/components/HomePape/testimonial/cards/Card";

const Testimonial = () => {
  const testData = [
    {
      title: "What People say",
      content:
        "Nicey Design Agency has been open to feedback, quick to respond, and flexible to changes throughout the process. They also had commendable balance between professionalism and creativity, which had impressed the client the most. The vendor has a small team that works with consistency and expertise. By creating a visual guide along the way.",
      user: [
        {
          name: "The Saint",
          campusName: "University Of Rwanda",
          profile: "/uni.jpg",
        },
        {
          name: "Shallipopi",
          campusName: "University Of Kigali",
          profile: "/uni.jpg",
        },
        {
          name: "The Great",
          campusName: "University Of Kenya",
          profile: "/student.jpg",
        },
        {
          name: "Zxus",
          campusName: "University Of Uganda",
          profile: "/univ.jpg",
        },
      ],
    },
  ];
  return (
    <div className="container py-20">
      {testData.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  );
};

export default Testimonial;
