import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            // if user exists, then issue a token
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                axios.post("https://revmax-garage-server-1.onrender.com/jwt", loggedUser, { withCredentials: true })
                    .then(data => {
                        console.log('Token response', data.data);
                    })
            }
            else {
                axios.post("https://revmax-garage-server-1.onrender.com/logout", loggedUser, {withCredentials: true})
                .then(data=>{
                    console.log(data.data);
                })
            }
        });
        return () => {
            return unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;