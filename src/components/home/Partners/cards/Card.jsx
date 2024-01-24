import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative h-52">
        <Image src={data.image} alt="Card Image" fill className="rounded-2xl" />
      </div>
      <h2 className="text-lg font-bold text-wrap overflow-hidden ">
        {data.campusName}
      </h2>
      <div className=" flex !items-center gap-1 ">
        <p className="text-md font-semibold"> {data.location}: </p>
        <p className="text-md font-medium">{data.place}</p>
      </div>
    </div>
  );
};

export default Card;
