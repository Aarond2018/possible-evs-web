import Image from "next/image";

//dummy - should be an actual map later

export default function ChargingStationsMap() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh]">
      <Image
        src="/images/charging-station-map.png"
        alt="charging-stations-map"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
