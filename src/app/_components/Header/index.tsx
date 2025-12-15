"use client";

import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import { isActiveLink } from "@/common/utils/link";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full h-26 flex items-center">
      <MaxWidthWrapper className="flex justify-between items-center gap-4">
        <Link href="/" className="relative block w-35.5 h-10">
          <Image
            src="/images/logo-dark.svg"
            alt="possible-evs-logo"
            fill
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-3 lg:gap-6 items-center">
          {navLinks.map((item) => {
            const isActive = isActiveLink(pathname, item.url);

            return (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className={`hover:text-gray-600 transition-all text-sm ${
                    isActive && "underline"
                  }`}
                >
                  {item.label}
                </Link>{" "}
              </li>
            );
          })}
        </ul>

        <MobileNav />
      </MaxWidthWrapper>
    </header>
  );
}

export const navLinks = [
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
  {
    id: 5,
    label: "Contact Us",
    url: "/contact-us",
  },
];
