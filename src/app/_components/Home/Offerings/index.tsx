import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";
import { Button } from "@/common/components/ui/button";
import Image from "next/image";

export default function Offerings() {
  return (
    <section className="w-full">
      <MaxWidthWrapper>
        <Title className="w-full my-12 md:my-16 max-w-254 mx-auto font-medium text-3xl md:text-5xl text-center leading-tight">
          All you need for easy mobility across Nigeria&apos;s evolving
          transport landscape
        </Title>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-0">
          <div className="relative sm:flex-1 w-full h-60 sm:h-100">
            <Image
              src="/images/ev-taxis.jpg"
              alt="ev-buses-image"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-118 flex flex-col gap-6">
              <Title className="font-medium text-3xl md:text-4xl">
                EV Taxis
              </Title>
              <Title className="text-lg md:text-xl font-normal leading-tight">
                Access affordable loans, monitor repayments in real-time, and
                unlock vehicles via blockchain smart contracts with our seamless
                financing solutions.
              </Title>
              <Button className="w-fit">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-6 lg:gap-0">
          <div className="flex-1 flex items-center justify-center sm:justify-normal">
            <div className="w-full max-w-118 flex flex-col gap-6">
              <Title className="font-medium text-3xl md:text-4xl">
                Smart Charging
              </Title>
              <Title className="text-lg md:text-xl font-normal leading-tight">
                SCADA-monitored charging stations, automated billing systems,
                and dynamic energy load balancing for efficient nationwide
                charging infrastructure.
              </Title>
              <Button className="w-fit">Learn More</Button>
            </div>
          </div>
          <div className="relative sm:flex-1 w-full h-60 sm:h-100">
            <Image
              src="/images/smart-charging.jpg"
              alt="smart-charging-image"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 lg:gap-0">
          <div className="relative sm:flex-1 w-full h-60 sm:h-100">
            <Image
              src="/images/airport-shuttle.jpg"
              alt="airport-shuttle-image"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-118 flex flex-col gap-6">
              <Title className="font-medium text-3xl md:text-4xl">
                Airport Shuttle
              </Title>
              <Title className="text-lg md:text-xl font-normal leading-tight">
                SCADA-monitored charging stations, automated billing systems,
                and dynamic energy load balancing for efficient nationwide
                charging infrastructure.
              </Title>
              <Button className="w-fit">Learn More</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
