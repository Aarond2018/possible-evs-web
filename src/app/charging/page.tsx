import { connection } from "next/server";

import ChargingStations from "./_components";

export default async function ChargingStationsPage() {
  await connection();
  return <ChargingStations />;
}
