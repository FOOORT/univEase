"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useFormik } from "formik";
const ApplyPage = () => {
  const [program, SetProgram] = useState({});
  const [loading, setLoading] = useState(false);
  let id =
    typeof window !== "undefined" ? localStorage.getItem("programId") : null;
  let token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  useEffect(() => {
    const getProgram = async () => {
      try {
        const program = await axios.get(`${apiUrl}program/read/${id}`);
        const response = await program.data.data;
        console.log("ProgramForm Data", response);
        if (response) {
          SetProgram(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProgram();
  }, [id]);

  const apply = async () => {
    try {
      if (formik.isValid) {
        const formData = {
          startingDate: formik.values.startingDate,
          coverLetter: formik.values.coverLetter,
          attachment: formik.values.attachment,
        };
        setLoading(true);
        const applicationData = await axios.post(
          `${apiUrl}applications/apply/${id}`,
          formData,
          config
        );
        if (applicationData) {
          formik.resetForm();
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log("Fail to Make Application ", error);
    }
  };

  const initialValues = {
    startingDate: "",
    coverLetter: "",
    attachment: "",
  };

  const validate = (values) => {
    let errors = {};
    if (
      !values.startingDate ||
      values.startingDate === "Select time you would start?"
    ) {
      errors.startingDate = "Take Required";
    }
    if (!values.coverLetter) {
      errors.coverLetter = "coverLetter Required";
    }
    if (!values.attachment) {
      errors.attachment = "attachment Required";
    }
    return errors;
  };

  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: apply,
  });

  return (
    <form
      className="w-full  py-32 flex flex-col gap-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h1 className="text-btn text-md font-bold ">Apply For Programs </h1>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm italic font-semibold">
            Apply with a specialized profile
          </h3>
          <select
            name=""
            id=""
            className="px-3 rounded-xl outline-none border w-full md:w-1/5 py-2 border-gray-300"
          >
            <option>General Profile</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h3 className="text-btn text-md font-bold ">Programs Details</h3>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl fonta font-semibold capitalize">
            {program?.name}
          </h2>
          <h2 className="flex gap-2 items-center">
            <FaLocationArrow />
            <span className="text-sm font-medium capitalize ">
              {program?.campus?.city}, {program?.campus?.country}
            </span>
          </h2>
          <p>{program?.degreeOverview}</p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-btn text-sm font-bold ">
              <BsGlobe />
              <Link href="/university" className="italic">
                View Course Posting
              </Link>
            </p>
            <hr className="bg-gray-400" />
          </div>
          <h3 className="text-btn text-md font-bold ">Programs Tags</h3>
          <div className="flex items-center gap-2">
            {program?.tags?.map((tag, index) => (
              <p
                key={index}
                className={`border border-dark cursor-pointer px-4 py-2 rounded-full flex items-center text-nowrap overflow-hidden justify-center gap-3 scale-95 hover:scale-100 active:scale-95 duration-100`}
              >
                {tag ? tag : tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm  text-btn  font-bold ">
            When you would start?
          </h3>
          {formik.touched.startingDate && formik.errors.startingDate ? (
            <div className=" text-sm text-red-800 font-extralight ">
              {formik.errors.startingDate}
            </div>
          ) : null}
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startingDate}
            id="startingDate"
            className="px-3 rounded-xl outline-none border w-full md:w-1/4 py-2 border-gray-300"
          >
            <option>Select time you would start?</option>
            <option>March in Tech</option>
            <option>Jully in Tech</option>
            <option>December in Tech</option>
          </select>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm  text-btn  font-bold ">Additional Details</h3>
          <div className="flex flex-col gap-1">
            <small className="italic text-sm font-bold">cover letter</small>
            {formik.touched.coverLetter && formik.errors.coverLetter ? (
              <div className=" text-sm text-red-800 font-extralight ">
                {formik.errors.coverLetter}
              </div>
            ) : null}
            <textarea
              name=""
              id="coverLetter"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.coverLetter}
              cols="30"
              rows="10"
              placeholder="Add you cover letter"
              className=" outline-none border border-gray-300 rounded-xl px-3 py-3"
            ></textarea>
          </div>
          <small className="italic text-sm font-bold">Attachment</small>
          {formik.touched.attachment && formik.errors.attachment ? (
            <div className=" text-sm text-red-800 font-extralight ">
              {formik.errors.attachment}
            </div>
          ) : null}
          <div className=" border border-dashed border-btn relative !cursor-pointer flex items-center justify-center py-12 rounded-xl">
            <h2>
              Drag or{" "}
              <span className="text-btn text-sm font-bold ">
                upload supportive
              </span>{" "}
              files
            </h2>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.attachment}
              id="attachment"
              type="file"
              className="w-full h-full absolute opacity-0 !cursor-pointer"
            />
          </div>
          <p>
            You may attach up to 10 files under the size of{" "}
            <span className="text-btn text-md font-bold"> 25 MB</span>  each.
            Include work samples or other documents to support your application.
            Do not attach your resume — your Upwork profile is automatically
            forwarded to the client with your proposal.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => formik.submitForm()}
          disabled={loading}
          className={`bg-btn w-40 border border-btn cursor-pointer px-4 py-2 text-white rounded-full flex items-center text-nowrap overflow-hidden justify-center gap-3 scale-95 hover:scale-100 active:scale-95 duration-100`}
        >
          {loading ? (
            <HashLoader size={15} color={"#ffffff"} loading={loading} />
          ) : (
            "Apply Now"
          )}
        </button>
        <button
          className={`border border-dark cursor-pointer px-4 py-2 rounded-full flex items-center text-nowrap overflow-hidden justify-center gap-3 scale-95 hover:scale-100 active:scale-95 duration-100`}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ApplyPage;
