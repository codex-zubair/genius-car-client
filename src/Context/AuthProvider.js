import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


export const AuthContext =  createContext();

const AuthProvider = ({children}) => {

    // set user
    const [user, setUser] = useState({});
    const [loader, SetLoder] = useState(true);

     const auth = getAuth(app);


    // create an account with email
    const createAnAccountWithEmail = (email, password)=> 
    {
       return createUserWithEmailAndPassword(auth, email, password)
  
    }



    // Check current user state.
    useEffect (()=> {
       const unSub = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        })

        return ()=> unSub();
    },[])



    // Current user set. 
    // TODO set profile image later
    const setCurrentUserNameProfile = (name)=>
    {
        updateProfile(auth.currentUser, {
            displayName: {name}, photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
    }


    // user Login system are added.
    const signUpWithEmail = (email, password)=> 
    {
       return signInWithEmailAndPassword(auth, email, password);
    }




     const authInfo = {auth, user,createAnAccountWithEmail,setCurrentUserNameProfile,signUpWithEmail }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;