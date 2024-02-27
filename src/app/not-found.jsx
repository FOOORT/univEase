import Link from "next/link";
const NotFound = () => {
  return (
    <div className=" grid place-content-center text-center items-center h-[90vh]">
      <h2 className=" text-lg font-bold ">NotFound</h2>
      <p>Sorry This page not exist</p>
      <Link href="/" className="font-medium ">
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
