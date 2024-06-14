import "../Signup.css";
import { useState } from "react";
import SignupForm from '../components/auth/SignupForm'
function Signup() {
  let [currentPage, setCurrentPage] = useState(0);

  const FormTitle = ["SignUp", "Personal Info", "Address"];

  return (
    <>
        <SignupForm
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          FormTitle={FormTitle}
        />
     

    </>
  );
}
export default Signup;
