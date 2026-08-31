import { Navigate } from "react-router-dom";

function Protectedroutes({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login"
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default Protectedroutes;