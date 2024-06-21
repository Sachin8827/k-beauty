import React from "react";
import '../../assets/styles/Signup.css'
import { InputField } from "../Common/FormInputGroup";

export const Names = ({firstName, lastName}) =>{
  return <>
  <InputField type="text" name = 'firstName' placeholder ="first Name" className="nameInput" value={firstName} />
  <InputField type="text" name = 'lastName' placeholder ="Enter lastname" className="nameInput" value ={lastName}/>
  </>
}
