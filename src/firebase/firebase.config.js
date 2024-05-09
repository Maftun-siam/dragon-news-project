// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBicUkYs1d79gD2oPQFcZ6O0IZs4pQk4KI",
  authDomain: "dragon-news-project-574aa.firebaseapp.com",
  projectId: "dragon-news-project-574aa",
  storageBucket: "dragon-news-project-574aa.appspot.com",
  messagingSenderId: "434681885861",
  appId: "1:434681885861:web:14a6aeae3797a38fe1894c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;