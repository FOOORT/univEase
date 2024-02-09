"use client";
import { IoIosClose } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Button from "../Common/Button";
import Image from "next/image";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
const SignupOnboard = ({
  setOpen,
  title,
  subtitle,
  ifoto,
  inputs,
  reset,
  buttons,
  height,
}) => {
  const [loading, setLoading] = useState(false);
  const signIn = async () => {
    const isUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    try {
      if (formik.isValid) {
        const formData = {
          email: formik.values.email,
          username: formik.values.username,
          password: formik.values.password,
        };
        setLoading(true);
        const loginData = await axios.post(`${isUrl}user/auth`, formData);
        if (loginData) {
          formik.resetForm();
          setLoading(false);
          localStorage.setItem("token", loginData.data.token);
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          // Unauthorized - Incorrect password
          formik.setErrors({
            email: "Incorect Username or Password.",
          });
        } else if (error.response.status === 422) {
          // Unprocessable Entity - Validation error (e.g., incorrect username)
          formik.setErrors({
            email: "Incorect Username or Password",
          });
        } else {
          // Other errors
          console.log("Failed To Login", error);
        }
      } else {
        console.log("Failed To Login", error);
      }
    }
  };
  const initialValues = {
    email: "",
    password: "",
    // username: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password Required";
    }
    // if (!values.username) {
    //   errors.username = "Username Required";
    // }

    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: signIn,
  });
  return (
    <div
      className="h-screen absolute top-0 left-0 w-full bg-gray-900/40 text-dark flex items-center justify-center "
      // onClick={() => setOpen(false)}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 bg-bgColor gap-3 rounded-[2.7rem] w-2/3 h-[85vh] text-dark ${
          height ? `h-${height}` : ""
        }`}
      >
        <div className="flex flex-col cursor-pointer justify-between px-6 py-4">
          <span
            className="border border-dark px-1 py-1 rounded-full w-fit"
            onClick={() => setOpen(false)}
          >
            <IoIosClose />
          </span>
          <div className="flex flex-col gap-3 !w-full">
            <h2 className="text-md font-bold mt-1">{title ? title : title}</h2>
            {inputs ? (
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-2 !w-full"
              >
                {formik.touched.email && formik.errors.email ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.email}
                  </div>
                ) : null}
                <input
                  type="text"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email or Username"
                  className="py-3 px-3 border border-gray-400 rounded-xl outline-none active:outline-none text-sm"
                />
                {/* {formik.touched.username && formik.errors.username ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.username}
                  </div>
                ) : null}
                <input
                  type="text"
                  id="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  placeholder="Username"
                  className="py-3 px-3 border border-gray-400 rounded-xl outline-none active:outline-none text-sm"
                /> */}
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-sm text-red-800 font-extralight ">
                    {formik.errors.password}
                  </div>
                ) : null}
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type="password"
                  id="password"
                  placeholder="****************"
                  className="py-3 px-3 border border-gray-400 rounded-xl outline-none active:outline-none text-sm"
                />
                <button
                  onClick={() => formik.submitForm()}
                  disabled={loading}
                  type="submit"
                  className="bg-dark py-3 font-bold  !text-white w-full rounded-xl !scale-100 flex items-center justify-center"
                >
                  {loading ? (
                    <HashLoader size={15} color={"#ffffff"} loading={loading} />
                  ) : (
                    "Continue"
                  )}
                </button>
                <div className="flex justify-between">
                  <div className="py-[1px] px-[1px] rounded-full border border-dark flex items-center justify-center ">
                    <IoIosCheckmark />
                  </div>
                  <h2 className="text-sm font-bold ">
                    {reset ? reset : reset}
                  </h2>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    icon={<FaGithub className="text-xs" />}
                    title={`Continue with Github`}
                    classes="bg-dark text-xs  !text-white w-full rounded-xl text-nowrap !scale-95 hover:!scale-100"
                  />
                  <Button
                    icon={<SiGmail className="text-xs" />}
                    title={`Continue with Email`}
                    classes="bg-dark  !text-white w-full rounded-xl !text-xs  text-nowrap !scale-95 hover:!scale-100"
                  />
                </div>
                <h5 className="text-sm font-medium ">
                  Not a member yet?{" "}
                  <span className="text-sm font-black">Join now</span>
                </h5>
                <p className="text-sm font-medium ">
                  By joining, you agree to the Fiverr Pro Terms of Service, and
                  to occasionally receive emails from us. Read our Privacy
                  Policy to learn how we use your personal data.
                </p>
              </form>
            ) : null}
            <div className="flex flex-col gap-2">
              <small className="text-sm font-bold">
                {subtitle ? subtitle : subtitle}
              </small>
              {buttons ? (
                <div className="flex gap-1 text-dark">
                  <Button
                    title="University"
                    classes={`bg-dark text-white border border-dark `}
                  />
                  <Button
                    title="Student"
                    classes="bg-transparent border border-dark !text-dark"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div
          className={`relative  w-full hidden md:block lg:items-center  ${
            height ? `h-${height}` : "h-[60vh]"
          }`}
        >
          <Image
            src={ifoto ? ifoto : ifoto}
            layout="fill"
            objectfit="cover"
            alt="Ifoto"
            className="rounded-[2.7rem] p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupOnboard;
