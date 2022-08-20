
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';


function RequireAuth  ({children}) {
    // RequireAuth children is:Inventory component 
    // getting user 
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }

    //jodi visitor login kora na thake then login e pathabo 
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace/>;
    }
 
    //  baki code: jodi user login kore pele tahole Inventory page dukar process login.js e
    return children;
};

export default RequireAuth;