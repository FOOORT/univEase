// import Card from "@/src/components/HomePape/blog/cards/Card";
import Link from "next/link";
import Card from "./Card";
const FetchBlogCard = () => {
  const blogData = [
    {
      title: "THE ART OF USER ENGAGEMENT: STRATEGIES FOR EXCEPTIONAL UX",
      image: "/uni1.jpg",
      date: "SEP 14, 2023",
      content:
        "For UX designers, online portfolios are probably the most popular type today",
    },
    {
      title: "THE ART OF USER ENGAGEMENT: STRATEGIES FOR EXCEPTIONAL UX",
      image: "/student.jpg",
      date: "SEP 14, 2023",
      content:
        "For UX designers, online portfolios are probably the most popular type today",
    },
    {
      title: "THE ART OF USER ENGAGEMENT: STRATEGIES FOR EXCEPTIONAL UX",
      image: "/uni.jpg",
      date: "SEP 14, 2023",
      content:
        "For UX designers, online portfolios are probably the most popular type today",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogData.map((item, index) => (
        <Link href="/blog">
          <Card key={index} data={item} />
        </Link>
      ))}
    </div>
  );
};

export default FetchBlogCard;
