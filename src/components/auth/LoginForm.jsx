import { Formik, Form, Field, ErrorMessage } from "formik";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth' 
import {app} from '../../firebaseConfig'
import {useDispatch} from 'react-redux'
import { validateEmail } from "../../Validations/Validations";
import {setUser} from '../../Redux/UserSlice'
import useLocalStorage from "../../CustomHooks/LocalStorage";
import "../../assets/styles/login.css";
import { combineSlices } from "@reduxjs/toolkit";
function LoginForm({ navigate, setLoggedIn }) {
  const dispatch = useDispatch()
  const auth  = getAuth(app)
  const provider = new GoogleAuthProvider();
  const handleSubmit = (values, { setSubmitting }) => {
    // Your form submission logic here
    const {findByEmail} = useLocalStorage();
    const status = findByEmail(values.email);
    if (status) {
      if (status.password == values.password) {
        dispatch(setUser(status))
        navigate("/home");
      } else alert("Wrong Password");
    } else {
      alert("user not found.. kindly please signup");
    }
    setSubmitting(false);
  };

const signUpWithGoogle = async () =>{
    try{
        const response =await signInWithPopup(auth, provider);
        const {displayName, email, phoneNumber, providerData, accessToken, refreshToken } = response.user;
        const user = {
            firstName : displayName,
            email : email,
            phoneNumber,
            accessToken,
            providerData,
            refreshToken
        };
        dispatch(setUser(user));
        console.log(user)
        navigate("/home");
    }catch(error){
      console.log(error)
      console.log("error occured")
    }
}

  return (
    <>
    <section className="login-section">
      <div className='container'>
        <div className='login-form'>
          <p>LOGIN</p>
          <p>Please enter your email and password</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              validateEmail(values, errors);
              return errors;
            }}
          onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='email'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='errormsg'
                />

                <div className='pass'>
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='password'
                  />
                  <ErrorMessage
                    name='password'
                    component='span'
                    className='errormsg1'
                  />

                  <div className='forgot'>Forgot Password?</div>
                </div>
                <button
                  type='submit'
                  // disabled={isSubmitting}
                  className='submitButton'
                >
                  LOGIN
                </button>
              </Form>
            )}
          </Formik>
          <button type="button" class="login-with-google-btn" onClick={signUpWithGoogle}>
              Sign in with Google
          </button>
          
          <p style={{ letterSpacing: "1px", fontSize: "13px" }}>
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/signup")}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Create one
            </a>
          </p>
        </div>
      </div>
      </section>
    </>
  );
}
export default LoginForm;
