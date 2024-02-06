import Image from "next/legacy/image";
import formatDate from "@/src/utils/DateFormat";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-64 rounded-2xl ">
        <Image
          src={data?.postImage}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <small className=" font-medium text-btn mt-2">
        {formatDate(data?.createdAt)}
      </small>
      <h1 className=" font-bold "> {data?.postTitle}</h1>
      <p className=" font-medium text-sm">{data?.postContent}</p>
    </div>
  );
};

export default Card;
