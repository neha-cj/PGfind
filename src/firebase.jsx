// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkm5qSATFQcoKLM_bkAmUJSWHVF4X1Tjc",
  authDomain: "mypg-b3927.firebaseapp.com",
  projectId: "mypg-b3927",
  storageBucket: "mypg-b3927.appspot.com",
  messagingSenderId: "975672520897",
  appId: "1:975672520897:web:879efee68ad3a863e16440"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
