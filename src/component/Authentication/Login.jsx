import GoogleAuth from './GoogleAuth';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const [signInWithEmailAndPassword,user,loading,error] = 
        useSignInWithEmailAndPassword(auth);
  //4th
  const navigate = useNavigate();
  // 5th protected page code send from requireAuth.js
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';


  const handleEmail = event =>{
      setEmail(event.target.value);
  }
  const handlePassword = event =>{
      setPassword(event.target.value);
  }


 

  if (user) {
      navigate(from, {replace:true});
  }
  if(loading){
    return <Loading></Loading>

  }
  const handleUserLogin = event =>{
      event.preventDefault();

  signInWithEmailAndPassword(email, password)

  }

    return (
        <div className="hero min-h-screen bg-[#5e13e5]">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622956286239.png" className="max-w-md rounded-lg" />
        
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleUserLogin} className="text-primary">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleEmail} type="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onBlur={handlePassword} type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">Create new Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        </form>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;