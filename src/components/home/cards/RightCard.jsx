import Image from "next/legacy/image";
const RightCard = () => {
  return (
    <div className="w-full flex">
      <div className="flex justify-start items-end h-full mt-6 lg:-mt-12 xl:mt-6 -mr-32 relative z-10">
        <div className="px-12 py-8 -right-5 lg:-right-10 -mt-14 rounded-2xl flex flex-col gap-1 items-center justify-center bg-btn">
          <h2 className="font-bold text-lg text-bgColor">847+</h2>
          <p className="font-normal text-sm  text-bgColor">Colleges</p>
        </div>
      </div>
      <div className=" relative h-[40vh] w-full rounded-2xl  border-2 border-blue-500">
        <Image
          src="/student.jpg"
          alt="Student Image"
          layout="fill"
          objectfit="cover"
          className="rounded-2xl "
        />
      </div>

      <div className="flex justify-start items-start h-full -mt-6 -ml-32 relative z-10">
        <div className=" px-12 py-8 rounded-2xl flex flex-col gap-1 items-center justify-center bg-dark">
          <h2 className="font-bold text-lg text-bgColor">125K+</h2>
          <p className="font-normal text-sm  text-bgColor">Students</p>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
