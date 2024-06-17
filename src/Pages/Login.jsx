
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <LoginForm navigate={navigate} setLoggedIn={setLoggedIn} />
      </div>
    </>
  );
}
export default Login;
