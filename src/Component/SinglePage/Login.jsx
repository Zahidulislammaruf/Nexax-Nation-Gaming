import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {login,singinGoogle} =useContext(AuthContext)
  const [checkError,setError] =  useState(null)
  const nevi = useNavigate()
  const hanleLogin = e  =>{
   
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    setError('')
    login(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset()
      toast("You Login Successfully");
      nevi('/')
    })
    .catch(error=>{
      setError(error.message)
    })
  }
  const handleGoogle= ()=> {
    singinGoogle()
    .then(result=>{
   console.log(result.user)
      toast("You Login Successfully");
      nevi('/')
    })
    
    .catch()
      }
    return (
        
        
            <div className=" container mx-auto">
            
            <div >
              
           <div className=" md:w-3/4 lg:w-2/4 mx-auto">
       
           <form onSubmit={hanleLogin} className="card-body">
              <div className="text-center">
              <h2 className="text-[20px]">Already Have A Account?</h2>
              <p className="mt-4 text-[22px] text-pink-800">Login Now</p>
      
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter your Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                {
                  checkError && <p className=" text-[20px] text-red-600 text-center">{checkError}</p>
                }
              </div>
              <div className=" flex flex-col justify-center items-center gap-4">
                <h2>or</h2>
               <button className="btn bg-red-100 text-black hover:bg-white" onClick={handleGoogle}><FcGoogle></FcGoogle> Google</button>
              </div>
              
            </form>
            <h2 className="text-center text-[20px]">New Here? <Link className=" text-red-800" to='/singup'>Singup Here</Link></h2>
           </div>
      
            </div>
              </div>
              
        
  
            
        
    );
};

export default Login;