# Manchestor-City

This is a sports based web application for match-tracker. Firebase's authentication, database, storage and hosting is used and React JS is used in frontend.

For the animation react-move and react-reveal is used. Proper private and public routes is developed using firebase auth. An administrator panel for keeping track of the players, team won, lost, draw or not yet played. Reusable components are used for optimized code. 

## Installation
1. Clone the React App
2. npm install
3. Configure firebase
4. Firebase Config - Create a file named firebase.js (inside project/src) - This file should contain your firebase keys

```
import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration - you get this key in firebase app setting under Firebase SDK snippet (2nd tab CDN) - Copy-paste entire firebaseConfig

var firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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


```

## Screenshot
<img src='https://user-images.githubusercontent.com/15896579/75110539-59fa3480-5655-11ea-9d59-d1784fc825d8.png' alt=""/>
<img src='https://user-images.githubusercontent.com/15896579/75110541-5bc3f800-5655-11ea-8ed8-52b786ee3977.png' alt=""/>
<img src='https://user-images.githubusercontent.com/15896579/75110542-5c5c8e80-5655-11ea-95cd-8a92d9e42876.png' alt=""/>
<img src='https://user-images.githubusercontent.com/15896579/75110543-5cf52500-5655-11ea-90bc-372667fb5dd7.png' alt=""/>
<img src='https://user-images.githubusercontent.com/15896579/75110544-5cf52500-5655-11ea-9c96-cabff82266c8.png' alt=""/>

## Video
Project Overview: https://www.loom.com/share/dc4e7bdafa9d4d28ab9fdefbce28bc03

## Other Relevant Videos
Initializing Firebase: https://www.loom.com/share/ee9dfcb00dbc42bd8971bcb916fb8418
Populating Data in Firebase: https://www.loom.com/share/8c9de52911f54dbe8c6eb31220f33d1b
Firebase Auth Setup: https://www.loom.com/share/85ccc187c800497cba7626889e3a38eb
Firebase Hosting: https://www.loom.com/share/4273fd4b6fa34f3d9484d3bd8bbb824e
