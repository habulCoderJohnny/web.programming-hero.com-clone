
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

function GoogleAuth () {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
  
    if (gUser) {
        navigate('/')
        console.log(gUser);
    }
    if(gLoading){
        return <Loading></Loading>
    
      }
    
    return (
        <div>
            <div className="divider text-primary font-bold text-xl">Or</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-success btn-outline mx-20">Continue with google</button>
        </div>
    );
};

export default GoogleAuth;