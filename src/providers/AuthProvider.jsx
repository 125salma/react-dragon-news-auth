import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //create user
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
   
    }

    // login
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
   
     //logout
   const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
   }
   

    //login time  have to check 
   useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth state changed',currentUser);
        setUser(currentUser);
        setLoading(false);
    });
     return () =>{
        unSubscribe();
     }
    
   },[])
 
  
   const authInfo = {
           user,
           createUser,
           signIn,
           logOut,
           loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;