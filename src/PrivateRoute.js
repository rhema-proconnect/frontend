import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { isLoggedIn, login } from "./service/authService";

const PrivateRoute = ({ children }) => {
    return login() ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
