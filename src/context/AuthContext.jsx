import { createContext, useState, useEffect, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { toastError, toastSuccess, toastWarn } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


console.log(currentUser)
  

  const signup = async (email, password, displayName) => {

    try {

      setLoading(true)

      await createUserWithEmailAndPassword(auth, email, password);

      toastSuccess("Registered Successfully");
      navigate("/home");
      await updateProfile(auth.currentUser, { displayName: displayName });

    } catch (error) {
      toastError("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }

  };


  const login = async (email, password) => {

    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      toastSuccess("Logged in Successfully");
      console.log(currentUser)
    } catch (error) {
      toastError("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }
  };



  const signUpWithGoogle = async () => {

    const provider = new GoogleAuthProvider();

    try {
      setLoading(true)
      await signInWithPopup(auth, provider)
      navigate("/home");
      toastSuccess("Logged in Successfully");
      console.log(currentUser)

    } catch (error) {
      console.log("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }

  }


  const logout = () => {

    signOut(auth);
    toastSuccess("logout is successfully");
    navigate("/home");

  };


  const forgotPassword = async (email) => {

    if (!email) {
      toastError("Please enter a Email")
    } else {
      try {

        await sendPasswordResetEmail(auth, email)
        toastWarn("Please check your Email.")

      } catch (error) {
        toastError(error);
      }
    }

  };

  const userTracking = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        console.log(user.displayName)
       
      } else {
        setCurrentUser(false);
      }
      
    });
    
  };


  useEffect(() => {
    userTracking()

  }, []);


  const value = {
    currentUser,
    signup,
    login,
    logout,
    signUpWithGoogle,
    forgotPassword,
  
  };

  // loading true ise hiçbir şey render etme
  // Böylece kullanıcı durumu belirsizken boş ekran gösterilir
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext