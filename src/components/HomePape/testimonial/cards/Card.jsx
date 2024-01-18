import UsersCard from "@/src/components/HomePape/testimonial/cards/UsersCard";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="font-bold text-md text-btn text-center">{data.title}</h1>
      <div className="w-full lg:w-4/5 mx-auto ">
        <p className="text-md font-medium">{data.content}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <UsersCard item={data.user} />
      </div>
    </div>
  );
};

export default Card;
