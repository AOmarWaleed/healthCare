"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomField from "../CustomField";
import userSvg from "../../app/assets/icons/user.svg";
import emailSvg from "../../app/assets/icons/email.svg";
import { formSchema } from "@/lib/validation";
import { createUser } from "@/lib/actions/user.actions";

export enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phoneInput",

  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export default function PatientForm({
  className,
}: React.AllHTMLAttributes<HTMLDivElement>) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    //! when u want to make the validation
    mode: "all",
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("start submit");

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const res = await createUser(user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    //! (className) to grow have all left height in main page
    <div className={className}>
      <section className="mb-12 space-y-4">
        <h1 className="header">Hi there 👋</h1>
        <p className="text-dark-700">Get started with appointments.</p>
      </section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomField
            type={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="ex. omar waleed"
            iconSrc={userSvg}
            iconAlt="user"
          />
          <CustomField
            type={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="ex. aow@gmail.com"
            iconSrc={emailSvg}
            iconAlt="email"
          />
          <CustomField
            type={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            //! ERROR;
            placeholder="01009253092"
            label="Phone Number"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
