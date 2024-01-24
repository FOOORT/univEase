import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="relative h-44 xl:h-64">
        <Image src={data.image} alt="Card Image" fill className="rounded-2xl" />
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
