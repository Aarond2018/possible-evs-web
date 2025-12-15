"use client";

import dynamic from "next/dynamic";
import Goal from "./Goal";
import Offerings from "./Offerings";
import News from "./News";
import Image from "next/image";

const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[90vh]">
      <Image
        src="/images/hero-image-1.jpg"
        alt={`hero-image`}
        fill
        priority
        className="object-cover blur-lg"
      />
      <div className="absolute inset-0 bg-black/45"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Goal />
      <Offerings />
      <News />
    </main>
  );
}
