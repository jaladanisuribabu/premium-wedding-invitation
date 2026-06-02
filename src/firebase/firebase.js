import { initializeApp } from "firebase/app";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8rUc-o68shfZzztTlFgdFzr8qjFGOQV8",

  authDomain:
    "premium-wedding-invitati-a2f39.firebaseapp.com",

  projectId:
    "premium-wedding-invitati-a2f39",

  storageBucket:
    "premium-wedding-invitati-a2f39.firebasestorage.app",

  messagingSenderId:
    "4268190434361:426819043436:web:763ba66df5163b13b51849",

  appId:
    "G-60LH2ETN59"
};

const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);