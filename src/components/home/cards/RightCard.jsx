import Image from "next/image";
const RightCard = () => {
  return (
    <div className="relative  w-full lg:h-[260px]">
      <Image
        src="/student.jpg"
        alt="Student Image"
        width={100}
        height={100}
        className="rounded-2xl w-full"
      />
      <div className="absolute px-12 py-8 -right-5 lg:-right-10 -mt-14 rounded-2xl flex flex-col gap-1 items-center justify-center bg-btn">
        <h2 className="font-bold text-lg text-bgColor">847+</h2>
        <p className="font-normal text-sm  text-bgColor">Colleges</p>
      </div>
      <div className="absolute px-12 py-8 -left-5 lg:-left-10 bottom-0 -mb-14 rounded-2xl flex flex-col gap-1 items-center justify-center bg-dark">
        <h2 className="font-bold text-lg text-bgColor">125K+</h2>
        <p className="font-normal text-sm  text-bgColor">Students</p>
      </div>
    </div>
  );
};

export default RightCard;
