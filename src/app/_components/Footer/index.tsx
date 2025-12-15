import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";
import FacebookSquare from "@/common/icons/FacebookSquare";
import Instagram from "@/common/icons/Instagram";
import LinkedlnSquare from "@/common/icons/LinkedlnSquare";
import Twitter from "@/common/icons/Twitter";
import Youtube from "@/common/icons/Youtube";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <MaxWidthWrapper className="flex flex-col sm:flex-row justify-between gap-6 py-12">
        <div className="flex flex-col gap-2">
          <Link href="/overview" className="relative block w-56.75 h-16">
            <Image
              src="/images/logo-light.svg"
              alt="possible-evs-logo"
              fill
              priority
            />
          </Link>
          <ul className="flex gap-2">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.icon}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Title className="text-white font-medium text-2xl">Services</Title>
          <ul className="">
            {services.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="text-white hover:text-white/80 transition-all text-sm"
                >
                  {item.label}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Title className="text-white font-medium text-2xl">More</Title>
          <ul className="">
            {more.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="text-white hover:text-white/80 transition-all text-sm"
                >
                  {item.label}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex justify-center py-4">
        <Title className="text-white text-sm text-center">
          &copy; 2025 Possible EVs. All rights reserved
        </Title>
      </MaxWidthWrapper>
    </footer>
  );
}

const socialLinks = [
  {
    id: 1,
    icon: (
      <LinkedlnSquare className="text-white hover:text-white/80 transition-all" />
    ),
    url: "#",
  },
  {
    id: 2,
    icon: (
      <FacebookSquare className="text-white hover:text-white/80 transition-all" />
    ),
    url: "#",
  },
  {
    id: 3,
    icon: <Twitter className="text-white hover:text-white/80 transition-all" />,
    url: "#",
  },
  {
    id: 4,
    icon: (
      <Instagram className="text-white hover:text-white/80 transition-all" />
    ),
    url: "#",
  },
  {
    id: 5,
    icon: <Youtube className="text-white hover:text-white/80 transition-all" />,
    url: "#",
  },
];

const services = [
  {
    id: 1,
    label: "Airport Shuttle",
    url: "/airport-shuttle",
  },
  {
    id: 2,
    label: "EV Taxis",
    url: "/ev-taxis",
  },
  {
    id: 3,
    label: "Fleet Management",
    url: "#",
  },
  {
    id: 4,
    label: "Charging Stations",
    url: "/charging",
  },
];

const more = [
  {
    id: 1,
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    id: 2,
    label: "FAQs",
    url: "#",
  },
];
