import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjDcIfPkL-QnSk023qu_xTBDzICzFY7g0",
  authDomain: "coderscommunity039.firebaseapp.com",
  projectId: "coderscommunity039",
  storageBucket: "coderscommunity039.appspot.com",
  messagingSenderId: "88927909661",
  appId: "1:88927909661:web:bad8256d72101dcf7513f4",
  measurementId: "G-3SDFF51W88"
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
