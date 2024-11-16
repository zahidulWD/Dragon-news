import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";


const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);  

    const location = useLocation();
    // console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;

};

export default PrivateRouter;