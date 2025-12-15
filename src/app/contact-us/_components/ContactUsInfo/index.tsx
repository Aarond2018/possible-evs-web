import Title from "@/common/components/Title/Title";
import FacebookSquare from "@/common/icons/FacebookSquare";
import Instagram from "@/common/icons/Instagram";
import LinkedlnSquare from "@/common/icons/LinkedlnSquare";
import Twitter from "@/common/icons/Twitter";
import Youtube from "@/common/icons/Youtube";
import Link from "next/link";

export default function ContactUsInfo() {
  return (
    <section className="flex-1 flex flex-col gap-6">
      <Title className="font-medium text-5xl sm:text-[3.5rem] leading-tight">
        Contact us
      </Title>

      <div className="flex flex-col gap-2">
        <Title className="font-medium text-[2.25rem]">Get in touch</Title>
        <Title className="text-lg sm:text-xl">Email: info@possibleevs.ng</Title>
        <Title className="text-lg sm:text-xl">Phone: +234 800 000 0000</Title>
      </div>

      <div className="flex flex-col gap-2">
        <Title className="font-medium text-[2.25rem]">Visit us</Title>
        <Title className="text-lg sm:text-xl">
          12A Electric Avenue, Victoria Island, Lagos, Nigeria
        </Title>
      </div>

      <div className="flex flex-col gap-2">
        <Title className="font-medium text-[2.25rem]">Connect with us</Title>
        <Title className="text-lg sm:text-xl">
          Follow us on social media to stay updated on our latest innovations
          and community initiatives.
        </Title>
        <ul className="flex gap-2">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.icon}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    id: 1,
    icon: (
      <LinkedlnSquare className="text-peimary hover:text-primary/60 transition-all" />
    ),
    url: "#",
  },
  {
    id: 2,
    icon: (
      <FacebookSquare className="text-peimary hover:text-primary/60 transition-all" />
    ),
    url: "#",
  },
  {
    id: 3,
    icon: (
      <Twitter className="text-peimary hover:text-primary/60 transition-all" />
    ),
    url: "#",
  },
  {
    id: 4,
    icon: (
      <Instagram className="text-peimary hover:text-primary/60 transition-all" />
    ),
    url: "#",
  },
  {
    id: 5,
    icon: (
      <Youtube className="text-peimary hover:text-primary/60 transition-all" />
    ),
    url: "#",
  },
];
