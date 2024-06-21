import React from "react";
import '../../assets/styles/Signup.css'
import { useField} from "formik"
export const InputField = ({label, ...props}) =>{
  const [field, meta, helpers] = useField(props)
  return <>
        <div className="col">
        <label htmlFor="input" className="form-label">
          {label}
          
        </label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">
          {meta.error}
        </div>
        ) : null}
      </div>
  </>
}