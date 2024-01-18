import Image from "next/image";
const RightCard = () => {
  return (
    <div className="relative  w-full h-[400px]">
      <Image
        src="/student.jpg"
        fill
        alt="Student Image"
        className="rounded-2xl"
      />
      <div className="absolute h-32 w-40 -right-5 -mt-16 px-3 py-4 rounded-2xl flex flex-col gap-1 items-center justify-center bg-btn">
        <h2 className="font-bold text-lg text-bgColor">847+</h2>
        <p className="font-normal text-sm  text-bgColor">Colleges</p>
      </div>
      <div className="absolute h-32 w-40 -left-7 bottom-0 -mb-16 px-3 py-4 rounded-2xl flex flex-col gap-1 items-center justify-center bg-textSoft">
        <h2 className="font-bold text-lg text-bgColor">125K+</h2>
        <p className="font-normal text-sm  text-bgColor">Students</p>
      </div>
    </div>
  );
};

export default RightCard;
