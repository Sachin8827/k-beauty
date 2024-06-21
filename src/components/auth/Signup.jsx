import { InputField } from "./../Common/FormInputGroup";
import React from "react";
import "../../assets/styles/Signup.css";


export const EmailPassword = ({email, password}) =>{
  return <>
  <InputField type="text" name = 'email' placeholder ="email" className="emailInput" value={email} />
  <InputField type="password" name = 'password' placeholder ="Enter password" className="passInput" value={password}/>
  </>
}
