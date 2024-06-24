
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  return (
    <>
      <LoginForm navigate={navigate} setLoggedIn={setLoggedIn} />
    </>
  );
}
export default Login;
