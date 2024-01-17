const ClassType = ({ item }) => {
  const itemArray = Array.isArray(item) ? item : [];
  return (
    <div className="flex items-center gap-3">
      {itemArray.map((buttons, index) => (
        <div
          key={index}
          className="border rounded-3xl px-3 py-2 leading-4 cursor-pointer text-nowrap  border-bgColor"
        >
          {buttons.classTypes}
        </div>
      ))}
    </div>
  );
};

export default ClassType;
