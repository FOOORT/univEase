import UsersCard from "@/src/components/home/testimonial/cards/UsersCard";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <h1 className="font-bold text-md text-btn text-center">{data.title}</h1>
      <div className="w-full lg:w-4/5 mx-auto ">
        <p className="text-md font-medium">{data.content}</p>
      </div>
      <div className=" py-2 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <UsersCard item={data.user} />
      </div>
    </div>
  );
};

export default Card;
