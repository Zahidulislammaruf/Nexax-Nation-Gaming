import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
     logOut()
     .then()
     .catch()
  }

    const navLinks = <>
    
    <li> <NavLink to=''>Home</NavLink></li>
    <li> <NavLink to='/about'>About Us</NavLink></li>
    <li> <NavLink to='/login'>Login</NavLink></li>
    <li> <NavLink to='/singup'>Singup</NavLink></li>
    {
      user && <>
      <li> <NavLink to='/privacy'>Privacy</NavLink></li>
    <li> <NavLink to='/contact'>Contact Us</NavLink></li>
      </>
    }
    </>
    return (
        <div className=" container mx-auto">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className=" normal-case text-xl"> <span className=" text-[24px] text-red-400">N</span>exus <span className=" text-[24px] text-red-400">N</span>ation
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
       user ? <>
     <div className="flex items-center gap-2">
     <span className=" text-[18px]">{user.displayName}</span>
          <img className="w-12 rounded-full" src={user.photoURL} /> 
       <a onClick={handleLogOut} className="btn bg-white text-black hover:text-white">Singout</a>

     </div>
       
       </> 
       :
       <Link></Link>
    }
  </div>
</div>  
        </div>
    );
};

export default Navbar;