const Welcome = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center text-nowrap text-center py-5 rounded-full text-lg bg-bgSoft lg:px-10 px-5 font-semibold text-btn ">
          Over 3 million readt-to-epand skills
        </div>
        <div className="flex w-full flex-col gap-2 justify-center items-center">
          <h1 className=" font-black lg:leading-[50px] lg:text-[3.3rem] text-[1.4rem]  text-center lg:w-[57%] w-full  ">
            Study with the world’s top featured Colleges.
          </h1>
          <p className=" text-center text-sm w-full ">
            Connect with millions of top-rated University & colleges around the
            world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
