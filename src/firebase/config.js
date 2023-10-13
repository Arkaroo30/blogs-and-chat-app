import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyALI29Bw_x9E_3MhHiPNCqBAzQ5cbqFT1o",
    authDomain: "live-chat-app-58317.firebaseapp.com",
    projectId: "live-chat-app-58317",
    storageBucket: "live-chat-app-58317.appspot.com",
    messagingSenderId: "140394654144",
    appId: "1:140394654144:web:0ada50688868f4bb4ec025"
  };

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
let auth=firebase.auth();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth};