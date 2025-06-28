// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ⬅️ أضف هذا

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOtJ7y6UAuYuOUuneTyaELwG-mXXThIpk",
  authDomain: "egx-tracher.firebaseapp.com",
  projectId: "egx-tracher",
  storageBucket: "egx-tracher.firebasestorage.app",
  messagingSenderId: "701358107975",
  appId: "1:701358107975:web:61c99a3a958ceaf1dd3062",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ أضف هذا السطر لتصدير قاعدة البيانات Firestore
export const db = getFirestore(app);
