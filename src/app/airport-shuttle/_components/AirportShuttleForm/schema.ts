import { coerceToDate } from "@/common/utils/zodUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import z from "zod";

const airportShuttleFormSchema = z.object({
  firstName: z
    .string("Enter a valid first name")
    .trim()
    .min(1, { message: "This field is required" })
    .max(30, { message: "First name is too long" })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, {
      message: "Enter a valid first name",
    }),
  lastName: z
    .string("Enter a valid last name")
    .trim()
    .min(1, { message: "This field is required" })
    .max(30, { message: "Last name is too long" })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, {
      message: "Enter a valid last name",
    }),
  email: z
    .string("Enter a valid email address")
    .trim()
    .email({ message: "Enter a valid email address" }),
  phoneNumber: z
    .string("Valid Phone number is required")
    .min(11, "Minimum of 11 numbers")
    .max(14, "Phone number looks too long"),
  location1: z
    .string("Enter a location")
    .min(1, { message: "This field is required" }),
  location2: z
    .string("Enter a location")
    .min(1, { message: "This field is required" }),
  // date: z
  //   .preprocess(coerceToDate, z.date())
  //   .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
  //     message: "Please select a valid date",
  //   }),
  date: z.preprocess(coerceToDate, z.date("Date is required")),
  time: z.string("Select time").min(1, { message: "This field is required" }),
});

export type AirportShuttleFormType = z.infer<typeof airportShuttleFormSchema>;

export const airtportShuttleFormResolver = zodResolver(
  airportShuttleFormSchema
) as unknown as Resolver<AirportShuttleFormType>;

export const airportShuttleDefaultValues: AirportShuttleFormType = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  location1: "Abuja Airport",
  location2: "Wuse 2",
  date: new Date(),
  time: "",
};
