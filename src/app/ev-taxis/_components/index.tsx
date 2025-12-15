import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import EvTaxisOverview from "./Overview";
import EvTaxisBenefits from "./Benefits";
import EvTaxisTestimonials from "./Testimonials/EvTaxisTestimonials";

export default function EvTaxis() {
  return (
    <main className="py-6 w-full">
      <MaxWidthWrapper>
        <EvTaxisOverview />
        <EvTaxisBenefits />
        <EvTaxisTestimonials />
      </MaxWidthWrapper>
    </main>
  );
}
