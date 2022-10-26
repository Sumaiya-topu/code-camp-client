// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuJxx1GUHddMa7RNHL5Q7D6UuRQ4m789c",
    authDomain: "code-camp-85c2d.firebaseapp.com",
    projectId: "code-camp-85c2d",
    storageBucket: "code-camp-85c2d.appspot.com",
    messagingSenderId: "963633627116",
    appId: "1:963633627116:web:539dccc0d4283f613b0ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;