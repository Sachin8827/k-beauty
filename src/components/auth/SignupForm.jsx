import SignUp from "./Signup";
import Button from "./../Common/Button";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import "../../assets/styles/Signup.css";
import { Form, Formik, ErrorMessage } from "formik"; // Import ErrorMessage
import {
  validateEmail,
  validatePersonalInfo,
  validateAddress,
} from "../../Validations/Validations";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../Common/ProgressBar";

function SignupForm({ currentPage, setCurrentPage, FormTitle }) {
  console.log(currentPage)
  const navigate = useNavigate();

  const validate = (values) => {
    let errors = {};

    validateEmail(values, errors);

    if (currentPage === 1) {
      validatePersonalInfo(values, errors);
    } else if (currentPage === 2) {
      validateAddress(values, errors);
    }

    console.log(values);
    console.log(errors);
    return errors;
  };

  const PageDisplay = (user, handleChange) => {
    console.log(user)
    if (currentPage === 0) {
      return <SignUp user={user} handleChange={handleChange} />;
    } else if (currentPage === 1) {
      return <PersonalInfo user={user} handleChange={handleChange} />;
    } else if (currentPage === 2) {
      return <Address user={user} handleChange={handleChange} />;
    }
  };
  const initialValuesStep1 = { email: "", password: "" };
  const initialValuesStep2 = { firstName: "", lastName: "" };
  const initialValuesStep3 = { street: "", city: "" };

  return (
    <>
    <div className="container">
      <div className='signup-form'  >
        <ProgressBar FormTitle={FormTitle} currentPage={currentPage} />
        <Formik
          validateOnChange={true}
          validateOnBlur={true}
          initialValues={
            currentPage === 0
              ? initialValuesStep1
              : currentPage === 1
              ? initialValuesStep2
              : initialValuesStep3
          }
          validate={validate}
          onSubmit={(values, actions) => {
            console.log(actions);

            if (currentPage === FormTitle.length - 1) {
              let users = [];
              const storedUsers = localStorage.getItem("users");

              if (storedUsers) {
                try {
                  users = JSON.parse(storedUsers);
                } catch (error) {
                  console.error("Error parsing stored users:", error);
                }
              }

              const status = users.find(
                (item, index) =>
                  item.email.toLowerCase() == values.email.toLowerCase()
              );

              if (status) {
                alert("already signIn");
              } else {
                users.push(values);
                localStorage.setItem("users", JSON.stringify(users));
                alert("signIn");
                navigate("/login");
              }
            } else {
              setCurrentPage((currPage) => currPage + 1);
              actions.setSubmitting(false);
            }
          }}
        >
          {({ values, handleChange }) => (
            <Form className="form-at-smallscreen">
              <h1 className='signup-heading'>{FormTitle[currentPage]}</h1>
              <p>please fill the information below</p>
              <div className='text-start'>
                {PageDisplay(values, handleChange)}
              </div>
              <div className='mt-5'>
                {currentPage !== 0 && currentPage !== 3 ? (
                  <Button
                    text='Prev'
                    className='previousButton'
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((currPage) => currPage - 1);
                    }}
                  />
                ) : null}
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