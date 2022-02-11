import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1B2RmzMG1yLyBhCeFmxEsXG-hlb6wE8U",
  authDomain: "portfolio-react-ecommerce.firebaseapp.com",
  projectId: "portfolio-react-ecommerce",
  storageBucket: "portfolio-react-ecommerce.appspot.com",
  messagingSenderId: "983755617578",
  appId: "1:983755617578:web:f3bd7b339e18de83131a53",
  measurementId: "G-CWZSHGT8MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();
export default app;