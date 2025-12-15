import { FieldEntryWithGrouping } from "@/types";
import { ContactUsFormType } from "./schema";

export const contactUsFields: FieldEntryWithGrouping<ContactUsFormType>[] = [
  {
    groupLabel: "name",
    fields: [
      {
        name: "firstName",
        placeHolder: "First Name",
      },
      { name: "lastName", placeHolder: "Last name" },
    ],
  },
  { name: "email", placeHolder: "Email Address" },
  {
    name: "phoneNumber",
    placeHolder: "Phone Number",
  },
  {
    name: "organization",
    placeHolder: "Organization (Optional)",
  },
  {
    name: "role",
    placeHolder: "Role (Optional)",
  },
  {
    name: "interest",
    placeHolder: "Select Interest",
  },
  {
    name: "message",
    placeHolder: "Message...",
  },
];
