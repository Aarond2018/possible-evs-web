"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Title from "@/common/components/Title/Title";
import { Button } from "@/common/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
        effect="fade"
        speed={1000}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={`hero-image-${i}`}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* Center Content */}
              <div className="absolute w-full max-w-240 mx-auto h-fit my-auto inset-0 flex gap-8 flex-col items-center justify-center text-center px-4">
                <Title className="text-white font-medium text-4xl xs:text-5xl md:text-6xl lg:text-[4rem] leading-tight">
                  {slide.text}
                </Title>

                <Button
                  size={"xl"}
                  variant={"outlineSecondary"}
                  className="rounded-xl px-10 md:px-24 font-semibold"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 40px;
          height: 40px;
          padding: 8px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .swiper-button-disabled {
          opacity: 0.3 !important;
        }
      `}</style>
    </section>
  );
}

const slides = [
  {
    image: "/images/hero-image-1.jpg",
    text: "Accelerating sustainable transportation through high-performance Electric Vehicles",
    buttonText: "Learn More",
  },
  {
    image: "/images/hero-image-2.jpg",
    text: "Experience the future of urban transportation with our EV Taxis",
    buttonText: "Learn More",
  },
  {
    image: "/images/hero-image-3.jpg",
    text: "Stress-free airport transportation powered by clean energy",
    buttonText: "Learn More",
  },
];
