"use client";
import Card from "@/src/components/Slide/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
const SlideCard = () => {
  const cardData = [
    {
      className: "University Of Rwanda",
      image: "/uni1.jpg",
      classType: [
        { classTypes: "Economics" },
        { classTypes: "IT" },
        { classTypes: "Science" },
      ],
    },
    {
      className: "Adventist University of Central Africa",
      image: "/auca.jpg",
      classType: [
        { classTypes: "Computer" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
    {
      className: "East African University-Rwanda",
      image: "/University.png",
      classType: [
        { classTypes: "Military" },
        { classTypes: "Veterinary" },
        { classTypes: "Politics" },
      ],
    },
    {
      className: "University Of Kigali",
      image: "/univ.jpg",
      classType: [
        { classTypes: "Business" },
        { classTypes: "IT" },
        { classTypes: "Science" },
      ],
    },
    {
      className: "IPRC South Huye Campus",
      image: "/University.jpg",
      classType: [
        { classTypes: "Saving" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
    {
      className: "IPRC West Karongi Campus",
      image: "/uni.jpg",
      classType: [
        { classTypes: "Saving" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
    {
      className: "University Of Rwanda",
      image: "/uni1.jpg",
      classType: [
        { classTypes: "Economics" },
        { classTypes: "IT" },
        { classTypes: "Science" },
      ],
    },
    {
      className: "Adventist University of Central Africa",
      image: "/auca.jpg",
      classType: [
        { classTypes: "Computer" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
    {
      className: "East African University-Rwanda",
      image: "/University.png",
      classType: [
        { classTypes: "Military" },
        { classTypes: "Veterinary" },
        { classTypes: "Politics" },
      ],
    },
    {
      className: "University Of Kigali",
      image: "/univ.jpg",
      classType: [
        { classTypes: "Business" },
        { classTypes: "IT" },
        { classTypes: "Science" },
      ],
    },
    {
      className: "IPRC South Huye Campus",
      image: "/University.jpg",
      classType: [
        { classTypes: "Saving" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
    {
      className: "IPRC West Karongi Campus",
      image: "/uni.jpg",
      classType: [
        { classTypes: "Saving" },
        { classTypes: "IT" },
        { classTypes: "Agriculture" },
      ],
    },
  ];

  return (
    <Swiper
      centeredSlides={true}
      // slidesPerView={6}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className="relative mt-40 bg-blue-300"
      breakpoints={{
        // When window width is <= 640px (mobile)
        640: {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        // When window width is <= 768px (tablet)
        768: {
          slidesPerView: 2,
          // spaceBetween: 20,
        },
        // Default (desktop and larger screens)
        1024: {
          slidesPerView: 6,
          // spaceBetween: 30,
        },
      }}
    >
      {cardData.map((item, index) => (
        <SwiperSlide className="lg:mr-28 mr-3" key={index}>
          <Link href="/university">
            <Card key={index} data={item} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCard;
