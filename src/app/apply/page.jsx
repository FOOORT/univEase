const ApplyPage = () => {
  return (
    <form className="w-full h-screen py-32 flex flex-col gap-4">
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h1 className="text-btn text-md font-bold ">Apply For Programs </h1>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm italic font-semibold">
            Apply with a specialized profile
          </h3>
          <select
            name=""
            id=""
            className="px-3 rounded-xl outline-none border w-full md:w-1/5 py-2 border-gray-300"
          >
            <option>General Profile</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl w-full px-8 py-4 flex flex-col gap-4">
        <h3 className="text-btn text-md font-bold ">Programs Details</h3>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl fonta font-semibold">Computer Science</h2>
        </div>
      </div>
    </form>
  );
};

export default ApplyPage;
