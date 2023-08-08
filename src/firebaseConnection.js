import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9rv_OFeXGJZIG25Vg5qPbysf5ZOhOz08",
  authDomain: "meuapp-72357.firebaseapp.com",
  projectId: "meuapp-72357",
  storageBucket: "meuapp-72357.appspot.com",
  messagingSenderId: "68567410850",
  appId: "1:68567410850:web:f8c498bce08226aea3cffb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

  