import { Form, Formik} from "formik"; // Import ErrorMessage
import { useNavigate } from "react-router-dom";
import {validationSchema} from '../../Validations/SchemaValidations'
import { EmailPassword } from "./Signup";
import {Names} from '../auth/PersonalInfo'
import {Place} from '../auth/Address'
import Button from "./../Common/Button";
import ProgressBar from "../Common/ProgressBar";
import useLocalStorage from "../../CustomHooks/LocalStorage";
import "../../assets/styles/Signup.css";
function SignupForm({ currentPage, setCurrentPage, FormTitle }) {
 
  const navigate = useNavigate();
  const currentValidationStep = validationSchema[currentPage];
  const initialValues = {
    email : "",
    password : "",
    firstName : "",
    lastName : "",
    street : "",
    city : ""
  }
  const handleBack = () =>{
    setCurrentPage((prevPage) => prevPage - 1);
    console.log("previous click");
  }

  const RenderPage = (values) => {
    const {email, password, firstName, lastName, street, city} = values
    
    if (currentPage === 0) {
      return <EmailPassword email={email} password={password} />;
    } else if (currentPage === 1) {
      return <Names firstName={firstName} lastName = {lastName} />;
    } else if (currentPage === 2) {
      return <Place street={street} city={city}  />;
    }
  };




  const handleSubmit  = (values, actions) => {
    if (currentPage === FormTitle.length - 1) {
      const {getUsers, findByEmail, saveUser} = useLocalStorage();
      const users = getUsers();
      const status = findByEmail(values.email);
      if (status) {
        alert("already signIn");
      } else {
        saveUser(users, values);
        alert("signIn");
        navigate("/login");
      }
    } else {
      setCurrentPage((currPage) => currPage + 1);
      actions.setSubmitting(false);
    }
  }

  console.log(initialValues)
  return (
    <>
    <div className="container">
      <div className='signup-form'  >
        <ProgressBar FormTitle={FormTitle} currentPage={currentPage} />
        <Formik
          initialValues={initialValues}
          validationSchema = {currentValidationStep}
          validateOnChange = {false}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className="form-at-smallscreen">
              <h1 className='signup-heading'>{FormTitle[currentPage]}</h1>
              <p>please fill the information below</p>
              <div className='text-start'>
                {RenderPage(values)}
              </div>
              <div className='mt-5'>
                {currentPage !== 0 && (
                  <button
                    type="button"
                    className='previousButton'
                    onClick={handleBack}
                  >
                    Prev
                  </button>
                )}
                <Button
                  text={currentPage !== 2 ? "Next" : "Finish"}
                  className='nextButton'
                  margin={currentPage === 0 ? 0.5 : 1.4}
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className='log' style={{ marginTop: "1.5rem", cursor: "pointer", letterSpacing : '0.7px'}}>
          Already a user ? <a onClick={() => navigate("/login")} style={{textDecoration : "underline"}}>Login</a>
        </div>
      </div>
      </div>
    </>
  );
}
export default SignupForm;