import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";




const SingUp = () => {
const {createUser,singinGoogle,updateuser} = useContext(AuthContext)
const [errormessage,seterrormsg] = useState(null)
const [errorpass,seterrorpass] = useState(null)
const [delay,setdelay] = useState(null)
const nevi = useNavigate()
  const hanleSingup = e  =>{
   
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const purl = e.target.purl.value
    

    seterrormsg('')
    seterrorpass('')
    if(password.length <7){
      seterrorpass('Password Should Be At Least 7 Characters')
      return;
    }
    else if(!/[A-Z]/.test(password)){
      seterrorpass('Password Should Have At Least One Upper Case Characters')
      return;
    }
    else if(!/[#?!@$^*-]/.test(password)){
      seterrorpass('Password Should Have At Least One Special Characters')
      return;
    }
    


    createUser(email,password)
    .then(result=>{
       const userdata = result.user;
      
       updateuser(name,purl)
       .then()
       .catch()
       


      

       nevi('/')
       toast("You Successfully Singup.Please Login Now Or Reload Website One Time");
      
      
      
      
      console.log(userdata)
    })
    .catch(error=>{
      console.error(error)
      seterrormsg(error.message)
    })


  }
  const handleGoogle= ()=> {
singinGoogle()
.then(result=>{
  toast("You Successfully Singup");
  nevi('/')
}
)

.catch()
  }
    return (
        <div>
            <div className=" container mx-auto">
            
            <div >
              
           <div className=" md:w-3/4 lg:w-2/4 mx-auto">
       
           <form onSubmit={hanleSingup} className="card-body">
              <div className="text-center">
              <h2 className="text-[20px]">New Here?</h2>
              <p className="mt-4 text-[22px] text-pink-800">Singup Now</p>
      
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name="purl" placeholder="Enter your photo Url" className="input input-bordered"  />
              </div>
              <div className="form-control">
                
                <label className="label">
                  {
                    errormessage ? <>
                  
                
                  <p className="  text-red-600">{errormessage}> </p>
        
                    </> 
                    :
                    <span className="label-text">Email</span>
                  }
                 
                </label>
                <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  {
                    errorpass ? <span className=" text-red-600">{errorpass}</span> : <span className="label-text">Password</span>
                  }
                </label>
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Singup</button>
              </div>
              
              <div className=" flex flex-col justify-center items-center gap-4">
                <h2>or</h2>
               <button className="btn bg-red-100 text-black hover:bg-white" onClick={handleGoogle}><FcGoogle></FcGoogle> Google</button>
              </div>
            </form>
            <h2 className="text-center text-[20px]">Already Have A Account? <Link className=" text-red-800" to='/login'>Login Here</Link></h2>
           </div>
      
            </div>
              </div>
              <ToastContainer />
        </div>
    );
};

export default SingUp;