import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSKqulwSIdq3L5wnlnWsRQt2rYBRlZ0Bg",
  authDomain: "cart-be7e3.firebaseapp.com",
  databaseURL: "https://cart-be7e3.firebaseio.com",
  projectId: "cart-be7e3",
  storageBucket: "cart-be7e3.appspot.com",
  messagingSenderId: "439632904655",
  appId: "1:439632904655:web:f68bd5e3ecc07981dcd2ba",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
