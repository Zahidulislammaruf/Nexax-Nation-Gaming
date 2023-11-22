// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDfouyjQRYDxI4JSTKbkLj8ODv6GMdYp8",
  authDomain: "nexus-nation.firebaseapp.com",
  projectId: "nexus-nation",
  storageBucket: "nexus-nation.appspot.com",
  messagingSenderId: "964886487653",
  appId: "1:964886487653:web:47ae3217ce847744f69c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;