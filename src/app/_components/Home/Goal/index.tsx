import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";
import Image from "next/image";

export default function Goal() {
  return (
    <section className="w-full">
      <MaxWidthWrapper>
        <Title className="w-full my-12 md:my-16 max-w-254 mx-auto font-medium text-3xl md:text-5xl text-center leading-tight">
          Transforming Nigeria&apos;s mobility landscape one electric vehicle at
          a time
        </Title>
      </MaxWidthWrapper>
      <div className="relative w-full h-80 md:h-120">
        <Image
          src="/images/ev-buses-home.jpg"
          alt="ev-buses"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
