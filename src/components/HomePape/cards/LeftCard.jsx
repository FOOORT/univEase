const LeftCard = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className=" font-semibold text-sm text-btn ">
        One Stop Solution For All Things Study in Universties
      </h3>
      <p className="text-sm font-medium">
        Studying at university is a dream for many students. We help you make
        that dream a reality. The process of choosing and applying for the best
        university for your chosen field of study can seem overwhelming.
      </p>
      <p className="text-sm font-medium">
        With UnivEase, that process is a whole lot easier. Our cutting-edge
        education technology platform connects international students and
        recruitment partners with opportunities at top universities around the
        world.
      </p>
      <div className="border rounded-3xl font-semibold w-fit px-3 py-3 cursor-pointer border-textSoft">
        Our Services
      </div>
    </div>
  );
};

export default LeftCard;
