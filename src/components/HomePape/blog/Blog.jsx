import Card from "@/src/components/HomePape/blog/cards/Card";
const Blog = () => {
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
    <div className="container flex flex-col gap-4 ">
      <h1 className="font-bold text-lg text-btn">Our recent Blog</h1>
      <p className="text-md font-medium">
        We are not only experienced engineers, but also visionary businessmen
        who perfectly understand your concerns about the future product — we
        ourselves have developed several proprietary solutions. See for
        yourself!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
