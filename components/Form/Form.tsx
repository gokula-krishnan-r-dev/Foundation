"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
// import SignatureCanvas from "react-signature-canvas";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useRef, useState } from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
export const json = {
  elements: [
    {
      type: "signaturepad",
      name: "signature",
      title: "Please sign here",
      isRequired: true,
    },
  ],
  showQuestionNumbers: false,
};

import { endPoint } from "../dev";
import { SuccessModel } from "./SuccessModel";
export const SubmitData = [
  {
    tag: "firstname*",
    placeholder: "First Name",
    type: "text",
    description: "Enter your First Name",
    required: true,
  },
  {
    tag: "lastname*",
    placeholder: "Last Name",
    type: "text",
    description: "Enter your Last Name",
    required: true,
  },
  {
    tag: "title*",
    placeholder: "Title",
    type: "text",
    description: "Enter your Title",
    required: true,
  },
  {
    tag: "email*",
    placeholder: "Email Address",
    type: "email",
    description: "Enter your Email Address",
    required: true,
  },
  {
    tag: "address*",
    placeholder: "Mailing Address",
    type: "text",
    description: "Enter your Mailing Address",
    required: true,
  },
  {
    tag: "mission",
    placeholder: "The mission of the organization",
    type: "text",
    area: "textarea",
    description: "Enter your Organization's Mission Statement",
    required: true,
  },
  {
    tag: "projectTitle*",
    placeholder:
      "The name of the specific project or program you're seeking funding for",
    type: "text",
    area: "textarea",
    description: "Enter your Project Title",
    required: true,
  },
  {
    tag: "projectDescription*",
    placeholder:
      "A brief overview of the project, including its objectives and significance.",
    type: "text",
    area: "textarea",
    description: "Enter your Project Description",
    required: true,
  },
  {
    tag: "targetPopulation*",
    placeholder:
      "Who will benefit from the project (e.g., children, the elderly, a specific community).",
    type: "text",
    area: "textarea",
    description: "Enter your Target Population",
  },
  {
    tag: "projectLocation*",
    placeholder: "Where the project will be implemented",
    type: "text",
    area: "textarea",
    description: "Enter your Project Location",
    required: true,
  },
  {
    tag: "totalProjectBudget*",
    placeholder: "An overview of the total cost of the project.",
    type: "text",
    area: "textarea",
    description: "Enter Total Project Budget",
    required: true,
  },
  {
    tag: "amountRequested*",
    placeholder: "The specific amount you are requesting from the donor.",
    type: "text",
    area: "textarea",
    description: "Enter Amount Requested",
    required: true,
  },
  {
    tag: "otherFundingSources*",
    placeholder:
      "Information about other funding you have received or are seeking for this project.",
    type: "text",
    area: "textarea",
    description: "Enter Other Funding Sources Information",
    required: true,
  },
  {
    type: "title",
    tag: "title",
    title: "Additional Documents  (if applicable)",
  },
  {
    tag: "references",
    placeholder: "References or Endorsements",
    type: "file",
    description:
      "Letters of support or references from credible individuals, donors, partners, community leaders, or organizations. or References from previous donors, partners, or community leaders.",
    required: false,
  },
  {
    type: "title",
    tag: "title",
    title: "Consent and Verification",
  },
  {
    tag: "consentFunds",
    placeholder: "Consent for Use of Funds",
    type: "file",
    description:
      "A statement where you agree to use the funds solely for the mentioned project.",
    required: false,
  },
  {
    tag: "verification",
    placeholder: "Verification Statement",
    type: "text",
    description:
      "A declaration that all information provided is accurate and truthful.",
    required: false,
  },
  {
    tag: "contactPerson*",
    placeholder: "Primary Contact Person",
    type: "text",
    description: "Enter Primary Contact Person Information",
    required: true,
  },
  {
    tag: "refCode*",
    placeholder: "refCode ",
    type: "text",
    description: "Enter refCode",
    required: true,
  },
];
const formSchemaObject: Record<string, any> = {};

SubmitData.forEach((value: any) => {
  if (value.tag === "file") {
    null;
  } else {
    formSchemaObject[value.tag] = z.string().min(2, {
      message: `${value.placeholder} must be at least 2 characters.`,
    });
  }
});

export function ProfileForm() {
  const formSchema = z.object(formSchemaObject);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(
      SubmitData.map((value: any) => [value.tag, ""])
    ),
  });
  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [addsign, setAddsign] = useState<any>("");
  console.log(addsign?.signature, "addsign");

  function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
      // setAddsign(JSON.stringify(sender.data, null, 3));
    });
    return (
      <div className="absolute w-full bottom-44">
        <Survey model={survey} />;
      </div>
    );
  }

  const generateYupSchema = (data: any) => {
    const schemaObject: any = {};

    data.forEach((field: any) => {
      if (field.tag) {
        switch (field.type) {
          case "text":
          case "email":
            schemaObject[field.tag] = yup
              .string()
              .required(`${field.placeholder} is required`);
            break;
          case "number":
            schemaObject[field.tag] = yup
              .number()
              .positive()
              .integer()
              .required(`${field.placeholder} must be a number`);
            break;

          default:
            schemaObject[field.tag] = yup
              .string()
              .required(`${field.placeholder} is required`);
            break;
        }
      }
    });

    return yup.object().shape(schemaObject).required();
  };

  const schema = generateYupSchema(SubmitData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors, "errors");

  const onSubmit = (data: any) => {
    const formData: any = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof FileList) {
        // Handle file inputs separately
        formData.append(`files`, data[key][0]);
        console.log(data[key][0], "formData");
      } else {
        formData.append(key, data[key]);
      }
    });

    const response: any = axios.post(
      `${endPoint}/submit-form?key=f70c7525463c`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response, "response");

    // Use fetch or any other method to send formData to your API
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SuccessModel
          setFormSubmitSuccess={setFormSubmitSuccess}
          formSubmitSuccess={formSubmitSuccess}
        />
        <SuccessModel
          setFormSubmitSuccess={setEmailError}
          formSubmitSuccess={emailError}
        />
        {SubmitData.map((value, index) => (
          <div key={index} className="flex mt-8 flex-col">
            {value.type === "title" ? (
              <h1 className="text-2xl font-bold">{value.title}</h1>
            ) : value.area === "textarea" ? (
              <>
                <label
                  className="capitalize text-lg font-semibold"
                  htmlFor={value.tag}
                >
                  {value.tag}
                </label>
                <p className="text-sm capitalize font-medium text-gray-400">
                  {value.description}
                </p>
                <textarea
                  rows={8}
                  placeholder={value.placeholder}
                  className="flex w-full rounded-2xl border border-input bg-transparent px-6 py-6 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...register(value.tag, { required: true })}
                  id={value.tag}
                />
                {errors?.[value.tag] && (
                  <span className="text-red-600 pt-2 text-sm font-normal">
                    This field is {value.tag} required
                  </span>
                )}
              </>
            ) : (
              <>
                <label
                  className="capitalize text-lg font-semibold"
                  htmlFor={value.tag}
                >
                  {value.tag}
                </label>
                <p className="text-sm capitalize pb-2 font-medium text-gray-400">
                  {value.description}
                </p>
                <input
                  placeholder={value.placeholder}
                  className="flex h-12 w-full rounded-2xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...register(value.tag, { required: true })}
                  type={value.type}
                  id={value.tag}
                />
                {errors?.[value.tag] && (
                  <span className="text-red-600 pt-2 text-sm font-normal">
                    This field is {value.tag} required
                  </span>
                )}
              </>
            )}
          </div>
        ))}
        {/* <h2></h2> */}
        {/* <SignatureCanvas
          penColor="blue"
          canvasProps={{ className: "sigCanvas" }}
        /> */}
        <button
          type="submit"
          className="group mt-8  inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-lg focus:outline-none ring-slate-700 dark:text-white text-black hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
        >
          Submit Your Application
        </button>
      </form>
    </div>
  );
}
