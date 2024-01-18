const Welcome = () => {
  return (
    <section className="lg:h-1/2">
      <div className=" px-5 py-20 flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center text-nowrap text-center py-2 rounded-full text-md bg-bgSoft px-5 font-semibold text-btn ">
          Over 3 million readt-to-epand skills
        </div>
        <div className="flex w-full flex-col gap-2 justify-center items-center">
          <h1 className=" font-black lg:leading-[37px] lg:text-[2rem] text-[1.4rem]  text-center lg:w-[40%] w-full  ">
            Study with the world’s top featured Colleges.
          </h1>
          <p className="text-center text-sm font-medium w-full ">
            Connect with millions of top-rated University & colleges around the
            world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
