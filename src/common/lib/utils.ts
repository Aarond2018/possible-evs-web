import * as clsx from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { type ClassValue } from "clsx";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Africa/Lagos");

type iDate = string | Dayjs | Date;

// export const disabledDate = (current: any) => {
//   return current && current < dayjs().startOf("day");
// };

export const preDisabledDate = (current: dayjs.Dayjs) => {
  return current && current.isAfter(dayjs().endOf("day"));
};

export function differenceFromNowToExpirationInMinutes(epoch: number): number {
  const now = dayjs();
  const expire = dayjs(epoch * 1000);

  const differenceInMinutes = expire.diff(now, "minute");
  return differenceInMinutes;
}

export const formatDate = (value: iDate, hasTime?: boolean) => {
  return dayjs(value).format(`DD-MMM-YYYY${hasTime ? " HH:mm:ss" : ""}`);
};

export const convertToIsoString = (date: iDate) => {
  return dayjs(date)?.toISOString();
};

export const adjustTimezone = (date: iDate) => {
  return dayjs(date).utc().add(1, "hour");
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx.clsx(inputs));
}
