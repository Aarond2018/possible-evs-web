import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import ContactUsInfo from "./ContactUsInfo";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <main className="py-6 md:py-10 w-full min-h-[85vh]">
      <MaxWidthWrapper className="flex flex-col md:flex-row gap-10 md:gap-8">
        <ContactUsInfo />
        <ContactUsForm />
      </MaxWidthWrapper>
    </main>
  );
}
