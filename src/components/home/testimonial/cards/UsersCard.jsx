import Image from "next/image";
const UsersCard = ({ item }) => {
  const isArray = Array.isArray(item) ? item : [];
  return (
    <>
      {isArray.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="lg:h-16 h-11 lg:w-16 w-12 rounded-full relative">
            <Image
              src={item.profile}
              alt="Image profile"
              layout="fill"
              objectFit="cover"
              className=" rounded-full "
            />
          </div>
          <div className="flex lg:gap-2 gap-1 flex-col">
            <h1 className="font-bold lg:text-md text-xs ">{item.name}</h1>
            <p className="font-medium lg:text-sm text-xs ">{item.campusName}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UsersCard;
