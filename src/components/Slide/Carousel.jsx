"use client";

import Card from "./Card";

const Carousel = ({ cardData }) => {
  return (
    <div className="overflow-hidden text-nowrap absolute bottom-0 mb-6 duration-100">
      <div className="flex gap-3 mt-12 animate-scroll ">
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
