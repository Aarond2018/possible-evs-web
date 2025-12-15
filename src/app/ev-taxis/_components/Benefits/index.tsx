import Title from "@/common/components/Title/Title";
import Image from "next/image";

export default function EvTaxisBenefits() {
  return (
    <section className="w-full">
      <Title className="w-full my-12 md:my-16 max-w-209.5 mx-auto font-medium text-4xl md:text-5xl text-center leading-tight">
        Ride clean and smooth. The future of taxis starts here
      </Title>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-0">
          <div className="relative sm:flex-1 w-full h-72 sm:h-100">
            <Image
              src="/images/ev-taxis-image-1.jpg"
              alt="ev-taxis-image-1"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex sm:justify-center items-center">
            <div className="w-full max-w-118 flex flex-col gap-6">
              <Title className="font-medium text-3xl md:text-4xl">
                Empowering drivers with EV Taxi solutions
              </Title>
              <Title className="text-lg md:text-xl font-normal leading-tight">
                Low cost EV Taxi boosts earnings and provides supportive tools
                and training for a cleaner and smarter driving experience
              </Title>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-6 lg:gap-0">
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-118 flex flex-col gap-6">
              <Title className="font-medium text-3xl md:text-4xl">
                Delivering a cleaner, smarter ride experience for passengers
              </Title>
              <Title className="text-lg md:text-xl font-normal leading-tight">
                An eco-friendly taxi service offering quiet, comfortable EV
                rides with reliable service, transparent pricing and smooth
                travel experience from pickup to destnation
              </Title>
            </div>
          </div>
          <div className="relative sm:flex-1 w-full h-72 sm:h-100">
            <Image
              src="/images/ev-taxis-image-2.jpg"
              alt="ev-taxis-image-2"
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
