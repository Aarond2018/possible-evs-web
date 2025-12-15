import Title from "@/common/components/Title/Title";

export default function EvTaxisTestimonials() {
  return (
    <section className="w-full mb-12">
      <Title className="w-full my-12 md:my-16 max-w-254 mx-auto font-medium text-4xl md:text-5xl text-center leading-tight">
        What our customers say about EV Taxis
      </Title>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        <div className="w-full min-h-56 sm:min-h-70 flex flex-col justify-between p-4 rounded-xl border border-gray-200">
          <Title className="text-sm sm:text-base font-normal">
            &quot;As a taxi driver, switching to electric was the best decision.
            With the affordable financing, I now earn 40% more after fuel and
            maintenance savings.&quot;
          </Title>
          <div className="flex flex-col">
            <Title className="font-medium">Yusuf Bello</Title>
            <Title className="text-sm">Ride-hailing Driver</Title>
          </div>
        </div>
        <div className="w-full min-h-56 sm:min-h-70 flex flex-col justify-between p-4 rounded-xl border border-gray-200">
          <Title className="text-sm sm:text-base font-normal">
            &quot;We financed 5 EVs for our delivery fleet. The tracking
            integration helps us optimize routes and the repayment terms fit our
            cash flow perfectly.&quot;
          </Title>
          <div className="flex flex-col">
            <Title className="font-medium">Amina Mohammed</Title>
            <Title className="text-sm">Logistics Company CEO</Title>
          </div>
        </div>
        <div className="w-full min-h-56 sm:min-h-70 flex flex-col justify-between p-4 rounded-xl border border-gray-200">
          <Title className="text-sm sm:text-base font-normal">
            &quot;The financing process was seamless. I got approved within a
            day and was driving my Tesla within a week. The savings on fuel
            alone cover my monthly payments!&quot;
          </Title>
          <div className="flex flex-col">
            <Title className="font-medium">Emeka Okonkwo</Title>
            <Title className="text-sm">Lagos Business Owner</Title>
          </div>
        </div>
      </div>
    </section>
  );
}
