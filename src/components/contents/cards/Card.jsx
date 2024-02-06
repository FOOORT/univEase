import Image from "next/legacy/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 mt-3 scale-95 hover:scale-100 duration-100 active:scale-95">
      <div className="relative h-72 xl:h-64 rounded-2xl overflow-hidden flex justify-center items-center">
        {data?.universityLogo && (
          <Image
            src={data.universityLogo}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <h2 className="text-base font-bold text-wrap overflow-hidden ">
        {data?.universityName}
      </h2>
      <div className=" flex !items-center gap-1 text-sm -mt-3 ">
        <p className="font-semibold"> {data?.country}: </p>
        <p className="font-medium">{data?.city}</p>
      </div>
    </div>
  );
};

export default Card;
