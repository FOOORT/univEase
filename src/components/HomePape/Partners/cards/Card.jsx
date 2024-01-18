import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative h-72">
        <Image src={data.image} alt="Card Image" fill className="rounded-2xl" />
      </div>
      <h2 className="text-lg font-bold">{data.campusName}</h2>
      <div className="flex gap-2 items-center">
        <p className="text-md font-semibold"> {data.location}: </p>
        <p className="text-sm font-medium">{data.place}</p>
      </div>
    </div>
  );
};

export default Card;
