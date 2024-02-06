const Welcome = ({ badge, title, desc }) => {
  return (
    <section className="-mt-[20vh] lg:-mt-[14vh] duration-100">
      <div className=" px-5 py-20 flex flex-col gap-6 justify-center items-center">
        <div className="py-4 rounded-full text-xs bg-slate-200 px-6 font-semibold text-btn">
          {badge}
        </div>

        <h1 className=" text-5xl lg:text-6xl font-black text-dark text-center w-full lg:w-[80%] ">
          {title}
        </h1>
        <p className="text-center text-sm font-medium w-full ">{desc}</p>
      </div>
    </section>
  );
};

export default Welcome;
