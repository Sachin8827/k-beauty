import { ErrorMessage } from "formik";
import React from "react";
import FormInputGroup from '../Common/FormInputGroup'

function Address({ user, handleChange}) {
  return (
    <>
      <FormInputGroup
        type="text"
        placeholder="Street"
        className='nameInput'
        value={user.street}
        name ="street"
        handleChange={handleChange} 
      />
      <ErrorMessage name="street" component="div" className="nameerror"/>
      <FormInputGroup
        type="text"
        name ="city"
        placeholder="City"
        className='nameInput'
        value={user.city}
        handleChange={handleChange} 
      />
      <ErrorMessage name="city" component="div" className="nameerror"/>
    </>
  );
}

export default Address;