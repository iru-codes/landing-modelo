// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqMbStmynQsCKpztJWGJ74a27NTUDs6W4",
  authDomain: "landing-page-modelo.firebaseapp.com",
  projectId: "landing-page-modelo",
  storageBucket: "landing-page-modelo.firebasestorage.app",
  messagingSenderId: "151853104506",
  appId: "1:151853104506:web:ce500170695faa48652ac3",
  measurementId: "G-RQMM907D3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };