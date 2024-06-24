import { InputField } from "./../Common/FormInputGroup";
import React from "react";
import "../../assets/styles/Signup.css";


export const EmailPassword = ({ email, password }) => {
  return <>
    <InputField type="text" name='email' placeholder="Enter Email" className="emailInput" value={email} />
    <InputField type="password" name='password' placeholder="Enter Password" className="passInput" value={password} />
  </>
}
