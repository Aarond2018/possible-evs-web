import Title from "@/common/components/Title/Title";
import { Button } from "@/common/components/ui/button";
import Image from "next/image";

export default function EvTaxisOverview() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-121 flex flex-col gap-4 md:gap-8">
          <Title className="font-medium text-4xl md:text-[3.5rem] leading-tight">
            Revolutionize your mobility with our EV Taxis
          </Title>

          <Button className="w-fit px-8 md:px-12">Contact Us</Button>
        </div>
      </div>
      <div className="relative md:flex-1 w-full h-72 md:h-100">
        <Image
          src="/images/ev-taxis.jpg"
          alt="airport-shuttle-image"
          fill
          priority
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
