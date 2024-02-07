"use client";
import Link from "next/link";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/src/app/loading";
const FetchBlogCard = ({ type }) => {
  const [blogData, SetblogData] = useState([]);
  const id =
    typeof window !== "undefined" ? localStorage.getItem("universityId") : null;

  useEffect(() => {
    let url;
    if (type === "all") {
      url = "https://univease.onrender.com/api/v1/blog/read";
    } else {
      url = `https://univease.onrender.com/api/v1/blog/${id}`;
    }
    const getBlog = async () => {
      try {
        const blog = await axios.get(url);
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
