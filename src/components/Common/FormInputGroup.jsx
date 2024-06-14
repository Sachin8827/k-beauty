import React from "react";
import '../../assets/styles/Signup.css'
import {Field} from "formik"
function FormInputGroup({ label, type, value,placeholder, className, name,handleChange }) {
  return (
    <>
      <div className="col">
        <label htmlFor="input" className="form-label">
          {label}
        </label>
        <Field
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={className}
          onChange ={handleChange}
        />
      </div>
    </>
  );
}

export default FormInputGroup;