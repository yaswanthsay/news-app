import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA3wtNjFWlqKUa5eowx9ek8MbvSbOUZ1xA",
  authDomain: "news-app-b81bf.firebaseapp.com",
  projectId: "news-app-b81bf",
  storageBucket: "news-app-b81bf.appspot.com",
  messagingSenderId: "683630432402",
  appId: "1:683630432402:web:92834d62d198dc40bdd64b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()