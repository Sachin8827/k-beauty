
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting }) => {
    // Your form submission logic here
    console.log(values);
    let users = JSON.parse(localStorage.getItem("users"));
    const status = users.find(
      (users, index) => users.email.toLowerCase() == values.email.toLowerCase()
    );
    if (status) {
      if (status.password == values.password) {
        setLoggedIn(true);
        navigate("/");
      } else alert("Wrong Password");
    } else {
      alert("user not found.. kindly please signup");
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className='container'>
        <LoginForm handleSubmit={handleSubmit} navigate={navigate} />
      </div>
    </>
  );
}
export default Login;
