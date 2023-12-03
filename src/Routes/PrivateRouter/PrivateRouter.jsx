import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import Loader from "../../Components/Loader";

const PrivateRouter = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Loader></Loader>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to='/login'></Navigate>
        )
    }
};

export default PrivateRouter;