import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVyLXof0qMYvpXiUOBcHwSJ9DI8KKxXxw",
  authDomain: "dragon-news-c5bc7.firebaseapp.com",
  projectId: "dragon-news-c5bc7",
  storageBucket: "dragon-news-c5bc7.appspot.com",
  messagingSenderId: "474460507047",
  appId: "1:474460507047:web:84e5063cd4a982a1dac482",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
