import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import Title from "@/common/components/Title/Title";

export default function ChargingStationsList() {
  return (
    <section className="w-full mb-12">
      <MaxWidthWrapper className="grid md:grid-cols-2 gap-6">
        {stations.map((station) => (
          <div
            key={station.id}
            className="border border-gray-200 p-4 rounded-2xl flex flex-col gap-4"
          >
            <Title className="font-medium text-lg sm:text-2xl">
              {station.name}
            </Title>

            <div className="flex justify-between gap-4">
              <Title className="text-sm">Address</Title>
              <Title className="text-xs xs:text-sm font-medium text-right">
                {station.address}
              </Title>
            </div>
            <div className="flex justify-between gap-4">
              <Title className="text-sm">Charger</Title>
              <Title className="text-xs xs:text-sm font-medium text-right">
                {station.charger}
              </Title>
            </div>
            <div className="flex justify-between gap-4">
              <Title className="text-sm">Connector</Title>
              <Title className="text-xs xs:text-sm font-medium text-right">
                {station.connector}
              </Title>
            </div>
            <div className="flex justify-between gap-4">
              <Title className="text-sm">Amount</Title>
              <Title className="text-xs xs:text-sm font-medium text-right">
                {station.amount}
              </Title>
            </div>
            <div className="flex justify-between gap-4">
              <Title className="text-sm">Open Times</Title>
              <Title className="text-xs xs:text-sm font-medium flex flex-col items-end text-right">
                {station.openTimes.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </Title>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}

const stations = [
  {
    id: 1,
    name: "Marriot Hotel, Ikeja Station",
    address: "22 Joel Ogunnaike, Ikeja, Lagos State, Nigeria",
    charger: "1 AC Charger",
    connector: "Type 2",
    amount: "22kW - ₦300/kWh",
    openTimes: ["Mondays - Fridays: 8AM - 5PM", "Saturdays: 9AM - 2PM"],
  },
  {
    id: 2,
    name: "Marriot Hotel, Ikeja Station",
    address: "22 Joel Ogunnaike, Ikeja, Lagos State, Nigeria",
    charger: "1 AC Charger",
    connector: "Type 2",
    amount: "22kW - ₦300/kWh",
    openTimes: ["Mondays - Fridays: 8AM - 5PM", "Saturdays: 9AM - 2PM"],
  },
  {
    id: 3,
    name: "Marriot Hotel, Ikeja Station",
    address: "22 Joel Ogunnaike, Ikeja, Lagos State, Nigeria",
    charger: "1 AC Charger",
    connector: "Type 2",
    amount: "22kW - ₦300/kWh",
    openTimes: ["Mondays - Fridays: 8AM - 5PM", "Saturdays: 9AM - 2PM"],
  },
  {
    id: 4,
    name: "Marriot Hotel, Ikeja Station",
    address: "22 Joel Ogunnaike, Ikeja, Lagos State, Nigeria",
    charger: "1 AC Charger",
    connector: "Type 2",
    amount: "22kW - ₦300/kWh",
    openTimes: ["Mondays - Fridays: 8AM - 5PM", "Saturdays: 9AM - 2PM"],
  },
];
