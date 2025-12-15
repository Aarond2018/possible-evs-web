"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/common/components/ui/drawer";
import { Menu } from "lucide-react";
import { navLinks } from ".";
import { isActiveLink } from "@/common/utils/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex md:hidden">
        <Menu className="cursor-pointer text-primary" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="py-6">
          <DrawerTitle className="relative block w-35.5 h-10 mx-auto">
            <Image
              src="/images/logo-dark.svg"
              alt="possible-evs-logo"
              fill
              priority
            />
          </DrawerTitle>

          <ul className="flex flex-col items-center gap-4 my-8">
            {navLinks.map((item) => {
              const isActive = isActiveLink(pathname, item.url);

              return (
                <li key={item.id}>
                  <DrawerClose asChild>
                    <Link
                      href={item.url}
                      className={`hover:text-gray-600 transition-all text-lg ${
                        isActive && "underline"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DrawerClose>
                </li>
              );
            })}
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
