// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAlCew7SNU41FQe5R5gKu-hnoJZPN8GAeY",
  authDomain: "portfolio-website-2f6d3.firebaseapp.com",
  projectId: "portfolio-website-2f6d3",
  storageBucket: "portfolio-website-2f6d3.appspot.com",
  messagingSenderId: "1045526808684",
  appId: "1:1045526808684:web:bc17a0e19bc6e18ccdb049",
  measurementId: "G-RXHVWWNBN9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
