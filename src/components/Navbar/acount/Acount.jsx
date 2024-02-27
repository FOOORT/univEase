"use client";
import { useEffect, useState } from "react";
import SignupOnboard from "../../Common/SignupOnboard";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/legacy/image";
import { MdOutlineNotificationsActive } from "react-icons/md";

// import CreateAccount from "../../Common/CreateAccount";
// const isAuthenticated = localStorage.getItem("token") !== null;
const Account = () => {
  const [isSignupOnboardOpen, setIsSignupOnboardOpen] = useState(false);

  const [modalType, setModalType] = useState(""); // No default type

  const handleModal = (type) => {
    setIsSignupOnboardOpen(!isSignupOnboardOpen);
    setModalType(type);
  };

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // This effect runs only once after the component mounts
      const token = localStorage.getItem("token");
      setIsAuthenticated(token !== null);
    }, []); 
  return (
    <>
      {isAuthenticated ? (
        <nav className="hidden md:flex gap-2 items-center ">
          <div className="hidden md:flex gap-1 items-center justify-center bg-slate-100 p-[2px] shadow-md py-3 px-3  rounded-full text-sm scale-[0.96] hover:scale-[0.99] duration-100">
            <IoSearchOutline className="text-btn font-bold text-2xl cursor-pointer" />
            <input
              type="text"
              className="outline-none bg-transparent "
              placeholder="Search.."
            />
          </div>
          <div className="bg-btn py-3 px-3 rounded-full ">
            <MdOutlineNotificationsActive className="text-white text-ld font-bold" />
          </div>
          <div className="p-5 rounded-full relative">
            <Image
              layout="fill"
              objectfit="cover"
              alt="profile"
              src="/uni.jpg"
              className="rounded-full"
            />
          </div>
        </nav>
      ) : (
        <nav className="hidden md:flex gap-1 items-center border-2 border-dark bg-slate-200 rounded-full text-sm scale-[0.96] hover:scale-[0.99] duration-100">
          <button
            className="rounded-l-full h-12 pl-4 pr-1"
            onClick={() => handleModal("signin")}
          >
            Sign in
          </button>
          <button
            className="bg-dark text-slate-100 duration-100 h-12 px-6 rounded-full"
            onClick={() => handleModal("signup")}
          >
            Sign up
          </button>
        </nav>
      )}

      {isSignupOnboardOpen && (
        <SignupOnboard
          title={modalType === "signup" ? "Who are you?" : "SignIn"}
          subtitle={modalType === "signup" ? "Help us direct you well" : ""}
          ifoto={modalType === "signup" ? "/signup1.png" : "/signin.png"}
          reset={modalType === "signin" ? "reset Password" : ""}
          inputs={modalType === "signin"}
          buttons={modalType === "signup"}
          height={modalType === "signin" || "signup" ? "80vh" : ""}
          setOpen={setIsSignupOnboardOpen}
        />
      )}
    </>
  );
};

export default Account;
