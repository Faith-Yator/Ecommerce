// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6QxFDYnAWpu6xlYbC7hF_UP5pXouU8XE",
  authDomain: "ecommerce-2cd59.firebaseapp.com",
  projectId: "ecommerce-2cd59",
  storageBucket: "ecommerce-2cd59.appspot.com",
  messagingSenderId: "955433702390",
  appId: "1:955433702390:web:3f53ef7042fea69d8cadd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);