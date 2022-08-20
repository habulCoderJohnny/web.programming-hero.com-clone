import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/logo.png'
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';




function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    const confirm = window.confirm('Are you sure to logout?');
    if (confirm) {
    signOut(auth);
    navigate('/login')
  };

}
  const menuItems =
  <>
      <li className='font-serif font-bold'>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="#support">Support</Link>
          <Link to="#Myclasses">My classes</Link>
          <Link to="#blog">Blog</Link>
      </li>
  </>

    return (
      <>
      <div className="navbar bg-[#5e13e5]"> 
          <div className="flex-1">

          <Link to="/"><img src={logo} alt="" /></Link>

              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex="0" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 ">
                          {menuItems}
                      </ul>
                  </div>
              </div>

          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal pr-20">
                  {menuItems}
                  <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">3</span>
        </div>
      </label>
              </ul>
          </div>

          <div className="flex-none gap-2">
    
              <div className="dropdown dropdown-end">
                  <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  {  user?.photoURL? <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                                </div>
                              :<div className="w-10 rounded-full">
                                <img src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png" alt="" />
                            </div>
                            }
               
                  </label>
                  <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
                      <li>
                    <Link to="#" className="justify-between text-purple-500 font-bold uppercase">
                    {user?.displayName} 
                          <span className="badge">Profile</span>
                          </Link>

                            <li>{user ? <button onClick={logout} className="btn btn-ghost">Logout</button> :
                                <Link to="/login">Login</Link>}</li>
              
                      </li>
                     

                  </ul>
              </div>
          </div>
      </div>

  </>
    );
};

export default Header;