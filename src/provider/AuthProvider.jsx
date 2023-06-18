import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githunProvider = new GithubAuthProvider();

  // create new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google
  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   github
  const githubSign = () => {
    setLoading(true)
    return signInWithPopup(auth, githunProvider);
  };

  // sign out
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  // update user name and profile ficture 
  const upPhNa = (logged,name, photo) =>{
    return updateProfile(logged, { displayName: name, photoURL: photo });

  }

  // user state foucse
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    loading,
    upPhNa,
    logOut,
    createUser,
    signIn,
    googleSingIn,
    githubSign,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
