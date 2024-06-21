
import React from "react";
import  { InputField } from '../Common/FormInputGroup'

export const Place = ({street, city}) =>{
  return <>
  <InputField type="text" name = 'street' placeholder ="Street" className="nameInput" value={street} />
  <InputField type="text" name = 'city' placeholder ="Enter city" className="nameInput" value={city}/>
  </>
}
