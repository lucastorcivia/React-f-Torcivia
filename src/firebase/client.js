import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBy_mWy3lqvQj278_fDFivvk9V3QyGr2tg",
    authDomain: "proyecto-react-8d659.firebaseapp.com",
    projectId: "proyecto-react-8d659",
    storageBucket: "proyecto-react-8d659.appspot.com",
    messagingSenderId: "877792221473",
    appId: "1:877792221473:web:6462d554ea73e5fff74660"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);