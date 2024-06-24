import { Formik, Form } from "formik";
import { validationSchema } from "../../Validations/SchemaValidations";
import Button from '../Common/Button'
import {Place} from  '../auth/Address'
import { useDispatch } from "react-redux";
import { setAddress } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
function TakeAddress(){
    let initialValues = {
        street : "",
        city : ""
      }
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const currentValidationStep = validationSchema[2]
      const handleSubmit =(values) =>{
        dispatch(setAddress({values}))
        navigate('/summary')
      }
    return<>
        <div className={`container`}  >
        <Formik
          initialValues={initialValues}
          validationSchema={currentValidationStep}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className='form-at-smallscreen'>
              <div className="address">
              <h1 className='signup-heading'>Address</h1>
              <p>please fill the information below</p>
              <div className='text-add' ><Place/>
              <div className='mt-5'>
                <Button
                  text={"submit"}
                  className="submitAddress"
                />
              </div>
              </div>
              
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
}

export default TakeAddress