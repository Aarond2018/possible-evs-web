"use client";

import { Form, FormItem } from "@/common/components/form";
import { useForm } from "react-hook-form";
import { FieldEntryWithGrouping } from "@/types";
import { Input } from "@/common/components/input";
import PhoneInput from "@/common/components/PhoneInput";
import { Button } from "@/common/components/ui/button";
import {
  airportShuttleDefaultValues,
  AirportShuttleFormType,
  airtportShuttleFormResolver,
} from "./schema";
import { airportShuttleFields } from "./helper";
import { TimePicker } from "@/common/components/timePicker";
import DatePicker from "@/common/components/datePicker";

const AirportShuttleForm = () => {
  const form = useForm<AirportShuttleFormType>({
    resolver: airtportShuttleFormResolver,
    defaultValues: airportShuttleDefaultValues,
  });

  const onSubmit = (data: AirportShuttleFormType) => {
    console.log(data);
  };

  function renderField(field: FieldEntryWithGrouping<AirportShuttleFormType>) {
    if (!("name" in field)) return null;

    return (
      <FormItem
        key={field.name}
        name={field.name}
        className={{ item: "space-y-1" }}
        render={(otherProps) => {
          if (field.name === "phoneNumber") {
            return <PhoneInput {...otherProps} />;
          }

          if (field.name === "location1" || field.name === "location2") {
            return (
              <Input
                {...otherProps}
                placeholder={field.placeHolder}
                type={field.type}
                prefix={field.prefixIcon}
                disabled
              />
            );
          }

          if (field.name === "date") {
            return <DatePicker {...otherProps} icon={field.prefixIcon} />;
          }

          if (field.name === "time") {
            return <TimePicker {...otherProps} icon={field.prefixIcon} />;
          }

          return (
            <Input
              {...otherProps}
              placeholder={field.placeHolder}
              type={field.type}
              prefix={field.prefixIcon}
            />
          );
        }}
      />
    );
  }

  return (
    <Form
      {...form}
      onSubmit={onSubmit}
      className="flex-1 w-full gap-4 flex flex-col border-0"
    >
      {airportShuttleFields.map((entry, index) => {
        if ("fields" in entry) {
          return (
            <div key={index}>
              <div className="flex flex-col xs:flex-row gap-4">
                {entry.fields.map((field) => renderField(field))}
              </div>
            </div>
          );
        }
        return renderField(entry);
      })}

      <Button type="submit" className="">
        Submit
      </Button>
    </Form>
  );
};

export default AirportShuttleForm;
