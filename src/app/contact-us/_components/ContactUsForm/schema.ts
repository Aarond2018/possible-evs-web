import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const contactUsSchema = z.object({
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
  organization: z.string("Enter a valid organization").optional(),
  role: z.string("Enter a valid role").optional(),
  interest: z
    .string("Select a valid interest")
    .min(1, { message: "This field is required" }),
  message: z
    .string("Enter a valid interest")
    .min(1, { message: "This field is required" }),
});

export const contactUsResolver = zodResolver(contactUsSchema);
export type ContactUsFormType = z.infer<typeof contactUsSchema>;

export const contactUsDefaultValues: ContactUsFormType = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  organization: "",
  role: "",
  interest: "",
  message: "",
};
