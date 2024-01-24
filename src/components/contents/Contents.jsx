import Card from "./cards/Card";
import Link from "next/link";

const Contents = ({ datas }) => {
  return (
    <div className="py-20 flex flex-col gap-4 w-full">
      <h1 className="font-bold text-lg text-btn">Our exclusive Programs</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {datas.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 || index === 4 ? "lg:col-span-2 " : "col-span-1"
            }`}
          >
            <Link href="/university">
              <Card data={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
