import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCROOna6NC7F5H22k1mnZ7VkarHdRHmOcc",
  authDomain: "m-city-4c8ad.firebaseapp.com",
  databaseURL: "https://m-city-4c8ad.firebaseio.com",
  projectId: "m-city-4c8ad",
  storageBucket: "m-city-4c8ad.appspot.com",
  messagingSenderId: "1017221765198",
  appId: "1:1017221765198:web:6da7e6ce9a4c15ea1b8b1f",
  measurementId: "G-RVPCYPH668"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize DB Alias
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};

// fetching data
// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });
