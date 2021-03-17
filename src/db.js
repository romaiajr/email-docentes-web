import firebase from "firebase/app";
import "firebase/firestore";
firebase.initializeApp({
  projectId: process.env.PROJECT_ID,
  databaseURL: process.env.DATABASE_URL,
});
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
