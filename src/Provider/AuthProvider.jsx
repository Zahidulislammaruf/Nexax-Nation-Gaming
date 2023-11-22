import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../assets/firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const[loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
   
      return createUserWithEmailAndPassword(auth,email,password)
   
    }
    const login = (email,password)=>{
       setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)  
    }

    const singinGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const updateuser = (name,purl) =>{
        return updateProfile(auth.currentUser,{displayName : name, photoURL: purl})
    }

    const logOut = () =>{
       setLoading(true)
      return signOut(auth);
    }
    useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth,currentUser=>{
           setuser(currentUser);
           setLoading(false)
       });
       return ()=>{
           unsubscribe()
       }
    },[])



const authinfo = {
    user,
    createUser,
    login,
    logOut,
    loading,
    singinGoogle,
    updateuser
}

    return (
        <AuthContext.Provider value={authinfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;