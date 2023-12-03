import { useAuth } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import useAdmin from "../../Hooks/useAdmin";



const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin ,loadAdmin] = useAdmin();

    if (loading || loadAdmin) {
        return <Loader></Loader>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/'></Navigate>



};

export default AdminRoute;