import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// Users will need to replace these with their own Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDemo-ReplaceWithActualKey",
  authDomain: "materialmatrix.firebaseapp.com",
  projectId: "materialmatrix",
  storageBucket: "materialmatrix.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
