// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDm-EvXojHGFdF4riOUAjaOFqMfKqo94jw",
  authDomain: "loveuts-7a90a.firebaseapp.com",
  projectId: "loveuts-7a90a",
  storageBucket: "loveuts-7a90a.firebasestorage.app",
  messagingSenderId: "828583960275",
  appId: "1:828583960275:web:7a031193ed21011a0b7e26"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);