import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";


import auth from "../../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const authContext = createContext(null);
const axiosPublic = useAxiosPublic()
export const useAuth = () => {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // const axiosPublic =useAxiosPublic()

    // Google login

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // Create User with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login with email and password
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     // Log Out method
     const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Forgot password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    // Updateprofile
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // onAuth State change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if(currentUser){
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                        localStorage.setItem('access-token',res.data.token)
                    }
                    })
                    .catch(error => console.log(error))
            }
            else {
                //remove token from local storage
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    
    // TODO dependency add 
    // [axiosPublic])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        emailLogin,
        logOut,
        resetPassword,
        profileUpdate
    }
    return (
        <authContext.Provider value={authInfo}>
            { children}
        </authContext.Provider>
    );
};

export default AuthProvider;