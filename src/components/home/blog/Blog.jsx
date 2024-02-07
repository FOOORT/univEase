import FetchBlogCard from "@/src/components/home/blog/cards/FetchBlogCard";
const Blog = ({type}) => {
  
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-xl text-btn">Our recent Blog</h1>
      <p className="text-md font-medium w-4/6">
        We are not only experienced engineers, but also visionary businessmen
        who perfectly understand your concerns about the future product — we
        ourselves have developed several proprietary solutions. See for
        yourself!
      </p>
      <FetchBlogCard type={type} />
    </div>
  );
};

export default Blog;
