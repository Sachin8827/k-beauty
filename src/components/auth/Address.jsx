
import React from "react";
import { InputField } from '../Common/FormInputGroup'
import Cities from "../../utils/constant/Cities";

export const Place = ({ street, city }) => {
  return <>
    <InputField type="text" name='street' placeholder="Enter Street" className="nameInput" value={street} />
    <InputField type="text" name='city' placeholder=" Enter city" className="nameInput" value={city} />
    {/* <select name="city" id="" className="nameInput">
      {Cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
    </select> */}
  </>
}
