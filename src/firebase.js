// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJkPYwfoQzk6qfJu8qqYV6HKWyvA8DnW0",
  authDomain: "freshorganic-41216.firebaseapp.com",
  databaseURL: "https://freshorganic-41216-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freshorganic-41216",
  storageBucket: "freshorganic-41216.appspot.com",
  messagingSenderId: "206690971579",
  appId: "1:206690971579:web:548333f77880b5bcc29e9e",
  measurementId: "G-NH7GLHD7S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const data = Database.getInstance();
// data.once("value").then((dataSnapshot)=>{
//     console.log(dataSnapshot.val());
// })
