import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBEmY03Ct_70UqQzdbWDsgeAjzrrRyXtRQ",
    authDomain: "madterminal-2d095.firebaseapp.com",
    projectId: "madterminal-2d095",
    storageBucket: "madterminal-2d095.appspot.com",
    messagingSenderId: "910969477164",
    appId: "1:910969477164:web:565f1eaccfc40ccf8b9989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }