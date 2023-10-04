import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Secrete/firebaseauth";

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const randomNumber = () => Math.floor(Math.random() * 19);

  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleAuthProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const loginWithEmailPassowrd = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleAddNameAndPhoto = (
    name = `USER${randomNumber()}`,
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    const info = {
      displayName: name,
      photoURL: photo,
    };
    setLoading(true);
    return updateProfile(auth.currentUser, info);
  };

  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    auth,
    loading,
    createUser,
    logOut,
    loginWithEmailPassowrd,
    handleAddNameAndPhoto,
    googleSignIn,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
