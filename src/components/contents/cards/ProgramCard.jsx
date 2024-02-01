import Image from "next/image";
const ProgramCardCard = ({ data, activate }) => {
  return (
    <div
      className="flex flex-col gap-3 mt-3 scale-95 hover:scale-100 duration-100 active:scale-95"
      onClick={() => activate(true)}
    >
      <div className="relative h-72 xl:h-64 rounded-2xl overflow-hidden flex justify-center items-center">
        <Image
          src={data?.campus?.universityLogo}
          alt="Card Image"
          width={400}
          height={400}
          className={`h-full w-full`}
        />
      </div>

      <div className="flex items-center text-bgColor  gap-4">
        <span className="border border-black px-3 py-2 text-xs font-medium rounded-full text-dark hover:text-dark cursor-pointer scale-105 duration-150 active:scale-95">
          {data?.tags}
        </span>
      </div>
      <h2 className="text-base font-bold text-wrap overflow-hidden ">
        {data?.name}
      </h2>
    </div>
  );
};

export default ProgramCardCard;
