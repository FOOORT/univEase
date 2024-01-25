import Image from "next/image";
const Card = ({ data, activate }) => {
  return (
    <div
      className="flex flex-col gap-3 mt-3 scale-95 hover:scale-100 duration-100 active:scale-95"
      onClick={() => activate(true)}
    >
      <div className="relative h-44 xl:h-64 rounded-2xl overflow-hidden">
        <Image
          src={data.image}
          alt="Card Image"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      <h2 className="text-base font-bold text-wrap overflow-hidden ">
        {data.name}
      </h2>
      <div className=" flex !items-center gap-1 text-sm -mt-3 ">
        <p className="font-semibold"> {data.others}: </p>
        <p className="font-medium">{data.place}</p>
      </div>
    </div>
  );
};

export default Card;
