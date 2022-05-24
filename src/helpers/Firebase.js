// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import database from "../../helpers/Firebase.js";
// import { ref, set, child, get, push, update } from "firebase/database";

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

// Get a reference to the database service
const database = getDatabase(app);
// firebase.initializeApp(firebaseConfig);



// set(ref(database), null);



// function writeUserData(userId, name, email, imageUrl) {
//   // const db = getDatabase();
//   set(ref(database, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   });
// }
// writeUserData(1, "aanh", "aanh@gmail.com", "http/img1");
// writeUserData(2, "banh", "banh@gmail.com", "http/img2");
// writeUserData(3, "canh", "canh@gmail.com", "http/img3");
// writeUserData(4, "danh", "danh@gmail.com", "http/img4");
// writeUserData(5, "hanh", "hanh@gmail.com", "http/img5");



// function writeNewPost(userId, name, email, imageUrl) {
//   // const db = getDatabase();

//   // A post entry.
//   const postData = {
//     userId: userId,
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(database), 'users')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/users/' + newPostKey] = postData;
//   updates['/users/' + userId + '/' + newPostKey] = postData;

//   return update(ref(database), updates);
// }
// writeNewPost(1, "aanhnew", "aanhnew@gmail.com", "http/img1new");
// writeNewPost(2, "banhnew", "banhnew@gmail.com", "http/img2new");
// writeNewPost(3, "canhnew", "canhnew@gmail.com", "http/img3new");
// writeNewPost(4, "danhnew", "danhnew@gmail.com", "http/img4new");



// const dbRef = ref(database);
// const userId = 5;
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });



export default database;