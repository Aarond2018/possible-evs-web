import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";
import Image from "next/image";
import AirportShuttleForm from "./AirportShuttleForm";

export default function AirportShuttle() {
  return (
    <main className="py-10 w-full min-h-[85vh]">
      <MaxWidthWrapper className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-6">
          <Title className="font-medium text-4xl md:text-5xl lg:text-[56px] leading-tight text-center md:text-left">
            The modern and clean way to commute
          </Title>

          <AirportShuttleForm />
        </div>

        <div className="relative flex-1 w-full min-h-72 md:min-h-147.5">
          <Image
            src="/images/airport-shuttle-image.jpg"
            alt="airport-shuttle-image"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
