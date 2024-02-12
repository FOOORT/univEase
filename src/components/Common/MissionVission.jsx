import { FaRegEye } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
const MissionVission = ({ data }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2   gap-3">
      <div className="  flex flex-col justify-start  gap-4 border border-gray-300 rounded-2xl px-2 py-3 ">
        <div className="flex items-center justify-center border border-gray-300 py-3 px-3 rounded-full w-fit ">
          <FaRegEye />
        </div>
        <h2 className="text-sm font-bold text-btn px-2 ">Vision</h2>
        <p className="text-sm font-medium px-2 pb-2">{data?.vision}</p>
      </div>
      <div className="flex flex-col gap-4 border border-gray-300 rounded-2xl px-2 py-3">
        <div className="flex items-center justify-center py-3 px-3 border border-gray-300 rounded-full w-fit ">
          <FiTarget />
        </div>
        <h2 className="text-sm font-bold text-btn px-2 ">Mission</h2>
        <p className="text-sm font-medium px-2 pb-2">{data?.mission}</p>
      </div>
    </div>
  );
};

export default MissionVission;
