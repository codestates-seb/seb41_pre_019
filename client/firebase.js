import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCoGIlkRfwxMmYnOgEszrlueXqpC_5-OzU",
    authDomain: "seb41pre019.firebaseapp.com",
    projectId: "seb41pre019",
    storageBucket: "seb41pre019.appspot.com",
    messagingSenderId: "596578048924",
    appId: "1:596578048924:web:4bae9017a8ceabf2ec8659"
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, firebase };