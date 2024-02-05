"use client";
import { useState } from "react";
import SignupOnboard from "../../Common/SignupOnboard";
import CreateAccount from "../../Common/CreateAccount";
const Account = () => {
  const [isSignupOnboardOpen, setIsSignupOnboardOpen] = useState(false);

  const [modalType, setModalType] = useState(""); // No default type

  const handleModal = (type) => {
    setIsSignupOnboardOpen(!isSignupOnboardOpen);
    setModalType(type);
  };

  return (
    <>
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
      {isSignupOnboardOpen && (
        <SignupOnboard
          title={modalType === "signup" ? "Who are you?" : "SignIn"}
          subtitle={modalType === "signup" ? "Help us direct you well" : ""}
          ifoto={modalType === "signup" ? "/signup1.png" : "/signin.png"}
          reset={modalType === "signin" ? "reset Password" : ""}
          inputs={modalType === "signin"}
          buttons={modalType === "signup"}
          height={modalType === "signin" ? "80vh" : ""}
          setOpen={setIsSignupOnboardOpen}
        />
      )}
    </>
  );
};

export default Account;
