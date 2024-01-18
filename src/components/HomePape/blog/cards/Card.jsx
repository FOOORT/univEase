import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-60 rounded-2xl ">
        <Image src={data.image} alt="Card Image" fill className="rounded-2xl" />
      </div>
      <small className="text-md font-medium text-btn ">{data.date}</small>
      <h1 className="text-md font-bold "> {data.title}</h1>
      <p className="text-md font-medium ">{data.content}</p>
    </div>
  );
};

export default Card;
