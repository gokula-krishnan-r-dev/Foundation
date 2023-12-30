import React from "react";
import { ProfileForm } from "../Form/Form";

const SubmitForm = () => {
  return (
    <div className="pb-12 max-w-4xl mx-auto">
      <div className="pb-6 px-16">
        <h1 className="text-3xl py-3 font-bold">Application form</h1>
        <p className="">
          Only requests received via the form below and accepted will be
          followed up. The foundation does not follow up on requests received by
          mail or verbally to employees or board members.{" "}
        </p>
      </div>
      <div className="px-16">
        <ProfileForm />
      </div>
    </div>
  );
};

export default SubmitForm;
