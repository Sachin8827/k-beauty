import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, isLoggedIn}) =>{
   
    return isLoggedIn ? children : <Navigate to={'/login'} />
}

export const PublicRoute = ({children, isLoggedIn}) =>{
   
    return !isLoggedIn ? children : <Navigate to={'/home'} />
}
