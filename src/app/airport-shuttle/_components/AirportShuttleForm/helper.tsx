import { FieldEntryWithGrouping } from "@/types";
import { AirportShuttleFormType } from "./schema";
import User from "@/common/icons/User";
import Mail from "@/common/icons/Mail";
import Phone from "@/common/icons/Phone";
import TimeLine from "@/common/icons/TimeLine";
import MapPin from "@/common/icons/MapPin";
import CalenderLine from "@/common/icons/CalenderLine";

export const airportShuttleFields: FieldEntryWithGrouping<AirportShuttleFormType>[] =
  [
    {
      groupLabel: "name",
      fields: [
        {
          name: "firstName",
          placeHolder: "First Name",
          prefixIcon: <User className="text-blue-200" />,
        },
        {
          name: "lastName",
          placeHolder: "Last name",
          prefixIcon: <User className="text-blue-200" />,
        },
      ],
    },
    {
      name: "email",
      placeHolder: "Email Address",
      prefixIcon: <Mail className="text-green-200" />,
    },
    {
      name: "phoneNumber",
      placeHolder: "Phone Number",
      prefixIcon: <Phone className="text-purple-100" />,
    },
    {
      name: "location1",
      placeHolder: "location",
      prefixIcon: <MapPin className="text-gray-400" />,
    },
    {
      name: "location2",
      placeHolder: "location",
      prefixIcon: <MapPin className="text-gray-400" />,
    },
    {
      groupLabel: "dateAndTime",
      fields: [
        {
          name: "date",
          placeHolder: "Select date",
          type: "date",
          prefixIcon: <CalenderLine />,
        },
        {
          name: "time",
          placeHolder: "Enter time",
          prefixIcon: <TimeLine className="text-orange-100" />,
        },
      ],
    },
  ];
