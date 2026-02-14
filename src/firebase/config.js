
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFY2nTA6E0cbuCYuPN8bN-29ZfLgs6qkk",
  authDomain: "movie-app-20131.firebaseapp.com",
  projectId: "movie-app-20131",
  storageBucket: "movie-app-20131.firebasestorage.app",
  messagingSenderId: "965287057701",
  appId: "1:965287057701:web:970f2e52b6149c7653a2cc",
  measurementId: "G-2SJFJ2LGSS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);