// import Card from "@/src/components/home/blog/cards/Card";
"use client";
import Link from "next/link";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/src/app/loading";
const FetchBlogCard = () => {
  const [blogData, SetblogData] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const blog = await axios.get(
          "https://univease.onrender.com/api/v1/blog/read"
        );
        const response = await blog.data.data;
        console.log("Blog Data", response);
        if (response) {
          SetblogData(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlog();
  }, []);
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {blogData.length > 0 ? (
        blogData.slice(0, 3).map((item, index) => (
          <Link href="/blog" key={index}>
            <Card data={item} />
          </Link>
        ))
      ) : (
        <div className=" absolute  flex justify-center items-center w-full">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default FetchBlogCard;
