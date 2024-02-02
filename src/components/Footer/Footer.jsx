import { FaRegUser } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg-bgSoft  rounded-xl px-4 flex flex-col justify-center">
      <div className="container  gap-3 py-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <h1 className="text-2xl font-black italic text-btn">UnivEase</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-btn">Services</h2>
          <p>Student</p>
          <p>Recruiters</p>
          <p>Universities</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-btn">Resources</h2>
          <p>Blog</p>
          <p>FREE IELTS Coaching</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-btn">Company</h2>
          <p>About us</p>
          <p>Accredentials</p>
          <p>FREE IELTS Coaching</p>
          <p>Employee Login</p>
          <p>Study Events</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">
            Bringing Quality Education to Students Around The World!
          </p>
          <div className="flex gap-2 items-center">
            <div className="lg:py-3 py-2 lg:px-3 px-2 rounded-full cursor-pointer border border-dark ">
              <FaRegUser />
            </div>
            <div className="lg:py-3 py-2 lg:px-3 px-2 rounded-full cursor-pointer border border-dark ">
              <BsBank />
            </div>
            <div className="lg:py-3 py-2 lg:px-3 px-2 rounded-full cursor-pointer border border-dark ">
              <TiTick />
            </div>
            <div className="lg:py-3 py-2 lg:px-3 px-2 rounded-full cursor-pointer border border-dark ">
              <SiMinutemailer />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-btn">Solution</h2>
          <p>Students essentials</p>
          <p>Teaching essentials</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-btn">Universities</h2>
          <p>Africa</p>
          <p>Canada</p>
          <p>Asia</p>
        </div>
      </div>
      <div className=" container py-10 lg:flex-row flex flex-col justify-between items-center text-center ">
        <div className="flex gap-3">
          <p className="text-md text-btn font-medium">Privacy Policy</p>
          <p className="text-md text-btn font-medium">Contact us</p>
        </div>

        <p className="text-nowrap">&copy;2024 UniveEase. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
