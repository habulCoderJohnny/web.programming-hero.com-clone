
import GoogleAuth from './GoogleAuth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

function Signup () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    // 3rd account create function
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    //4th
    const navigate = useNavigate();

    // 2nd
    const handleName = event =>{
        setName(event.target.value);
    }
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }

        if (user) {
            navigate('/courses');
        }
        
        if(loading){
          return <Loading></Loading>
      
        }
      
    const handleCreateUser = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email,password,name);
      }
    

    return (
        <div className="hero min-h-screen bg-[#5e13e5]">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622956051167.png" className="max-w-md rounded-lg" />
              
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleCreateUser} className="text-primary">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onBlur={handleName}type="text" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onBlur={handleEmail} type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onBlur={handlePassword} type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">Already have Accounr? Login</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Signup</button>
              </div>
              </form>
              <GoogleAuth></GoogleAuth>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;