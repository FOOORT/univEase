import FetchBlogCard from "@/src/components/HomePape/blog/cards/FetchBlogCard";
const Blog = () => {
  return (
    <div className="container flex flex-col gap-4 ">
      <h1 className="font-bold text-lg text-btn">Our recent Blog</h1>
      <p className="text-md font-medium">
        We are not only experienced engineers, but also visionary businessmen
        who perfectly understand your concerns about the future product — we
        ourselves have developed several proprietary solutions. See for
        yourself!
      </p>
      <FetchBlogCard />
    </div>
  );
};

export default Blog;
