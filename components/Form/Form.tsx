"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import SignaturePad from "react-signature-canvas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SuccessModel } from "./SuccessModel";
import { useRef, useState } from "react";
import { AlertError } from "../Alert/error";
import { Textarea } from "../ui/textarea";
export const SubmitData = [
  {
    tag: "firstname",
    placeholder: "First Name",
    type: "text",
    description: "Enter your First Name",
  },
  {
    tag: "lastname",
    placeholder: "Last Name",
    type: "text",
    description: "Enter your Last Name",
  },
  {
    tag: "title",
    placeholder: "Title",
    type: "text",
    description: "Enter your Title",
  },
  {
    tag: "email",
    placeholder: "Email Address",
    type: "email",
    description: "Enter your Email Address",
  },
  {
    tag: "address",
    placeholder: "Mailing Address",
    type: "text",
    description: "Enter your Mailing Address",
  },
  {
    tag: "mission",
    placeholder: "The mission of the organization",
    type: "text",
    area: "textarea",
    description: "Enter your Organization's Mission Statement",
  },
  {
    tag: "projectTitle",
    placeholder:
      "The name of the specific project or program you're seeking funding for",
    type: "text",
    area: "textarea",
    description: "Enter your Project Title",
  },
  {
    tag: "projectDescription",
    placeholder:
      "A brief overview of the project, including its objectives and significance.",
    type: "text",
    area: "textarea",
    description: "Enter your Project Description",
  },
  {
    tag: "targetPopulation",
    placeholder:
      "Who will benefit from the project (e.g., children, the elderly, a specific community).",
    type: "text",
    area: "textarea",
    description: "Enter your Target Population",
  },
  {
    tag: "projectLocation",
    placeholder: "Where the project will be implemented",
    type: "text",
    area: "textarea",
    description: "Enter your Project Location",
  },
  {
    tag: "totalProjectBudget",
    placeholder: "An overview of the total cost of the project.",
    type: "text",
    area: "textarea",
    description: "Enter Total Project Budget",
  },
  {
    tag: "amountRequested",
    placeholder: "The specific amount you are requesting from the donor.",
    type: "text",
    area: "textarea",
    description: "Enter Amount Requested",
  },
  {
    tag: "otherFundingSources",
    placeholder:
      "Information about other funding you have received or are seeking for this project.",
    type: "text",
    area: "textarea",
    description: "Enter Other Funding Sources Information",
  },
  {
    tag: "title",
    title: "Additional Documents  (if applicable)",
  },
  {
    tag: "references",
    placeholder: "References or Endorsements",
    type: "file",
    description:
      "Letters of support or references from credible individuals, donors, partners, community leaders, or organizations. or References from previous donors, partners, or community leaders.",
  },
  {
    tag: "title",
    title: "Consent and Verification",
  },
  {
    tag: "consentFunds",
    placeholder: "Consent for Use of Funds",
    type: "file",
    description:
      "A statement where you agree to use the funds solely for the mentioned project.",
  },
  {
    tag: "verification",
    placeholder: "Verification Statement",
    type: "text",
    description:
      "A declaration that all information provided is accurate and truthful.",
  },
  {
    tag: "contactPerson",
    placeholder: "Primary Contact Person",
    type: "text",
    description: "Enter Primary Contact Person Information",
  },
  {
    tag: "refCode",
    placeholder: "refCode ",
    type: "text",
    description: "Enter refCode",
  },
];
const formSchemaObject: Record<string, any> = {};

SubmitData.forEach((value: any) => {
  formSchemaObject[value.tag] = z.string().min(2, {
    message: `${value.placeholder} must be at least 2 characters.`,
  });
});

export function ProfileForm() {
  const [imageURL, setImageURL] = useState<any>(); // create a state that will contain our image url
  const sigCanvas: any = useRef({});
  const formSchema = z.object(formSchemaObject);

  // const clear = () => sigCanvas.current.clear();

  // const save = () =>
  // setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(
      SubmitData.map((value: any) => [value.tag, ""])
    ),
  });
  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const updatedValues = {
        ...values,
        status: "pending", // Replace 'approved' with the desired status value
      };
      const response: any = await axios.post(
        "http://localhost:3000/submit-form?key=f70c7525463c",
        updatedValues
      );
      console.log(response.data.ErrorMessage, "response");
      // response.data.ErrorMessage === "Email already exists" &&
      //   AlertError(response.data.ErrorMessage);
      setFormSubmitSuccess(response.data.code === 201);
      setEmailError(response.data.code === 400);
      return response;
    } catch (error) {
      AlertError("Error submitting form data");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  relative"
      >
        <SuccessModel
          setFormSubmitSuccess={setFormSubmitSuccess}
          formSubmitSuccess={formSubmitSuccess}
        />
        <SuccessModel
          setFormSubmitSuccess={setEmailError}
          formSubmitSuccess={emailError}
        />
        <div className="">
          {SubmitData?.map((value: any, index: number) => (
            <FormField
              key={index}
              control={form.control}
              name={value.tag}
              render={({ field }) => (
                <>
                  {value.area === "textarea" ? (
                    <FormItem className="mt-4">
                      <FormLabel className="text-base">
                        {value.placeholder}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="rounded-xl outline-none py-3 px-3 hover:border-gray-400 focus:border-gray-400"
                          rows={9}
                          placeholder={value.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>{value.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  ) : (
                    <FormItem className="mt-4">
                      <FormLabel>{value.placeholder}</FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-xl hover:border-gray-400 focus:border-gray-400"
                          type={value.type}
                          placeholder={value.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>{value.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                </>
              )}
            />
          ))}
          {/* <button onClick={save}>Add Sign</button> */}
          {/* <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas",
            }}
          /> */}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
