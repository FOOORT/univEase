"use client";
import Card from "./cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/src/app/loading";
import UniversityDetails from "./UniversityDetails";
const Contents = () => {
  const [datas, setdatas] = useState([]);
  const [modal, setmodal] = useState(false);
  const handlemodal = () => {
    setmodal(!modal);
  };
  useEffect(() => {
    const getUniversity = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
      try {
        const university = await axios.get(`${apiUrl}university/read`);
        const response = await university.data.data;
        console.log("University Data", response);
        if (response) {
          setdatas(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUniversity();
  }, []);
  const handleUniversityClick = (id) => {
    localStorage.setItem("universityId", id);
  };
  return (
    <div className="py-20 flex flex-col gap-4 w-full">
      <h1 className="font-bold text-lg text-btn">Our exclusive Universities</h1>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {datas.length > 0 ? (
          datas.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 4 ? "lg:col-span-2 " : "col-span-1"
              }`}
            >
              <article
                // href={`/university/`}
                onClick={() => {
                  handlemodal();
                  handleUniversityClick(item._id);
                }}
              >
                <Card data={item} />
              </article>
            </div>
          ))
        ) : (
          <div className=" absolute  flex justify-center items-center w-full">
            <Loading />
          </div>
        )}
      </div>
      {modal && <UniversityDetails activate={setmodal} />}
    </div>
  );
};

export default Contents;
