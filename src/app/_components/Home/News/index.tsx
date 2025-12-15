import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";
import { Button } from "@/common/components/ui/button";
import Image from "next/image";

export default function News() {
  return (
    <section className="w-full px-5 mb-12">
      <Title className="w-full my-12 md:my-16 max-w-254 mx-auto font-medium text-3xl md:text-5xl text-center leading-tight">
        We’re in the news
      </Title>
      <MaxWidthWrapper className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        <div className="w-full flex flex-col gap-2">
          <div className="relative w-full h-56">
            <Image
              src="/images/news-home-1.jpg"
              alt="news-article-img-1"
              fill
              priority
              className="object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Title className="text-sm font-normal">5 July 2023</Title>
              <Title className="font-medium text-xl md:text-2xl leading-tight">
                Possible EVS to launch first 100% electric taxis in Nigeria
              </Title>
              <Title className="font-normal text-lg md:text-xl leading-tight">
                The transport sector in Nigeria represents about 24% of in-scope
                carbon emissions every year and 72% of these emissions come from
                passenger vehicles...
              </Title>
            </div>
            <Button className="w-fit px-10 mt-4">Read</Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="relative w-full h-56">
            <Image
              src="/images/news-home-2.jpg"
              alt="news-article-img-2"
              fill
              priority
              className="object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Title className="text-sm font-normal">25 July 2024</Title>
              <Title className="font-medium text-xl md:text-2xl leading-tight">
                6 Nigerian electric vehicle companies you should know in 2024
              </Title>
              <Title className="font-normal text-lg md:text-xl leading-tight">
                The global electric vehicle (EV) market has seen explosive
                growth over the past decade, with major players like BYD, Tesla,
                and VW Group leading the charge...
              </Title>
            </div>
            <Button className="w-fit px-10 mt-4">Read</Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="relative w-full h-56">
            <Image
              src="/images/news-home-3.png"
              alt="news-article-img-3"
              fill
              priority
              className="object-cover rounded-t-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Title className="text-sm font-normal">12 October 2023</Title>
              <Title className="font-medium text-xl md:text-2xl leading-tight">
                Possible EVS wants to become Nigeria’s first manufacturer of
                electric vehicles
              </Title>
              <Title className="font-normal text-lg md:text-xl leading-tight">
                Possible EVS, a Nigerian electric mobility firm, is set to
                launch EV assembly plants in Nigeria that will produce up to
                10,000 EVs annually...
              </Title>
            </div>
            <Button className="w-fit px-10 mt-4">Read</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
