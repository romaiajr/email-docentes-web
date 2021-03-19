// import firebase from "firebase/app";
// import "firebase/firestore";
// firebase.initializeApp({
//   projectId: process.env.PROJECT_ID,
//   databaseURL: process.env.DATABASE_URL,
// });
// export const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

// src/firebaseConfig.js
// import firebase from "firebase";

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: process.env.VUE_APP_API_KEY,
//   authDomain: process.env.VUE_APP_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_DOMAIN_URL,
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_ID,
// };

// Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDe6dBLFjS7_YLh7EXybSUAWNdORRZJPNs",
  authDomain: "docentesteste.firebaseapp.com",
  projectId: "docentesteste",
  storageBucket: "docentesteste.appspot.com",
  messagingSenderId: "447266271261",
  appId: "1:447266271261:web:a8567d706b177e38ebd6f4",
  measurementId: "G-9J4RM7RLB7",
};
export default firebase.initializeApp(firebaseConfig);
