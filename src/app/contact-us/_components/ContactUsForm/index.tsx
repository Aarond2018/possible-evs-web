"use client";

import { Form, FormItem } from "@/common/components/form";
import { useForm } from "react-hook-form";
import {
  contactUsDefaultValues,
  ContactUsFormType,
  contactUsResolver,
} from "./schema";
import { FieldEntryWithGrouping } from "@/types";
import { Input } from "@/common/components/input";
import PhoneInput from "@/common/components/PhoneInput";
import { Option, Select } from "@/common/components/select";
import { contactUsFields } from "./helper";
import { Button } from "@/common/components/ui/button";
import { Textarea } from "@/common/components/textarea";

const ContactUsForm = () => {
  const form = useForm<ContactUsFormType>({
    resolver: contactUsResolver,
    defaultValues: contactUsDefaultValues,
  });

  const onSubmit = (data: ContactUsFormType) => {
    console.log(data);
  };

  // console.log(form.formState.errors);

  function renderField(field: FieldEntryWithGrouping<ContactUsFormType>) {
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

          if (field.name === "interest") {
            return (
              <Select {...otherProps} placeholder={field.placeHolder}>
                {interests.map((item) => (
                  <Option key={item.label} value={item.label}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            );
          }

          if (field.name === "message") {
            return (
              <Textarea
                {...otherProps}
                rows={5}
                placeholder={field.placeHolder}
              />
            );
          }

          return (
            <Input
              {...otherProps}
              placeholder={field.placeHolder}
              type={field.type}
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
      className="flex-1 w-full gap-4 flex flex-col"
    >
      {contactUsFields.map((entry, index) => {
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

export default ContactUsForm;

export const interests = [
  { value: "a", label: "Interest A" },
  { value: "b", label: "Interest B" },
  { value: "c", label: "Interest C" },
];
