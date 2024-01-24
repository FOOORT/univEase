import Image from "next/image";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-64 rounded-2xl ">
        <Image src={data.image} alt="Card Image" fill className="rounded-2xl" />
      </div>
      <small className=" font-medium text-btn mt-2">{data.date}</small>
      <h1 className=" font-bold "> {data.title}</h1>
      <p className=" font-medium text-sm">{data.content}</p>
    </div>
  );
};

export default Card;
