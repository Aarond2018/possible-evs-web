"use client";

import MaxWidthWrapper from "@/common/components/maxWidthWrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/tabs";
import Title from "@/common/components/Title/Title";
import { Button } from "@/common/components/ui/button";
import useTabChange from "@/common/hooks/useTabChange";
import List from "@/common/icons/List";
import Map from "@/common/icons/Map";
import ChargingStationsMap from "./ChargingStationsMap";
import ChargingStationsList from "./ChargingStationsList";

export default function ChargingStations() {
  const tabs = useTabChange({
    defaultKey: "/charging?tab=map",
  });

  return (
    <main className="pt-6 w-full">
      <MaxWidthWrapper>
        <Title className="font-medium text-4xl md:text-5xl text-center">
          Find a charging station near you
        </Title>
      </MaxWidthWrapper>
      <Tabs
        defaultValue="map"
        value={tabs.currentTab}
        className="w-full min-h-[80vh]"
      >
        <MaxWidthWrapper className="flex justify-between items-center my-10">
          <TabsList className="flex whitespace-nowrap flex-nowrap border border-gray-200">
            <TabsTrigger
              value="map"
              onClick={() => tabs.handleTabChange("map")}
              className="inline-flex flex-none px-3 py-2 text-sm text-gray-400 data-[state=active]:text-white data-[state=active]:bg-primary cursor-pointer"
            >
              <Map />
            </TabsTrigger>
            <TabsTrigger
              value="list"
              onClick={() => tabs.handleTabChange("list")}
              className="inline-flex flex-none px-3 py-2 text-sm text-gray-400 data-[state=active]:text-white data-[state=active]:bg-primary cursor-pointer"
            >
              <List />
            </TabsTrigger>
          </TabsList>
          <Button variant={"outline"} size={"sm"} className="px-8">
            Filter
          </Button>
        </MaxWidthWrapper>

        <TabsContent value="map">
          <ChargingStationsMap />
        </TabsContent>
        <TabsContent value="list">
          <ChargingStationsList />
        </TabsContent>
      </Tabs>
    </main>
  );
}
