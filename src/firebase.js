import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwaopW2i5lEWx8qYTKCYBIIufp9PLtyoE",
  authDomain: "todo-list-9d09c.firebaseapp.com",
  databaseURL: "https://todo-list-9d09c-default-rtdb.firebaseio.com",
  projectId: "todo-list-9d09c",
  storageBucket: "todo-list-9d09c.appspot.com",
  messagingSenderId: "663922728070",
  appId: "1:663922728070:web:3d64753158411502de0507"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
