import Image from "next/image";
const RightCard = () => {
  return (
    <div className="relative  w-full lg:h-[310px] h-[300px]">
      <Image
        src="/student.jpg"
        fill
        alt="Student Image"
        className="rounded-2xl"
      />
      <div className="absolute h-28 w-36 -right-5 lg:-right-10 -mt-14 px-3 py-4 rounded-2xl flex flex-col gap-1 items-center justify-center bg-btn">
        <h2 className="font-bold text-lg text-bgColor">847+</h2>
        <p className="font-normal text-sm  text-bgColor">Colleges</p>
      </div>
      <div className="absolute h-28 w-36 -left-5 lg:-left-10 bottom-0 -mb-14 px-3 py-4 rounded-2xl flex flex-col gap-1 items-center justify-center bg-textSoft">
        <h2 className="font-bold text-lg text-bgColor">125K+</h2>
        <p className="font-normal text-sm  text-bgColor">Students</p>
      </div>
    </div>
  );
};

export default RightCard;
