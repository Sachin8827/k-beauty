import React from "react";
import '../../assets/styles/Signup.css'
import FormInputGroup from "../Common/FormInputGroup";
import { ErrorMessage, useFormik } from "formik";
function PersonalInfo({user, handleChange}) {

  return (
    <>
   
      <FormInputGroup
        label=""
        name="firstName"
        className='nameInput'
        type="text"
        value={user.firstName}
        placeholder="First name"
        handleChange={handleChange}
      />
       <ErrorMessage name="firstName" component="div" className="nameerror" />
      <FormInputGroup
        label=""
        name="lastName"
        type="text"
        className="nameInput"
        value={user.lastName}
        placeholder="Last name"
        handleChange={handleChange}
      />
      <ErrorMessage name="lastName" component="div" className="nameerror" />
    </>
  );
}

export default PersonalInfo;