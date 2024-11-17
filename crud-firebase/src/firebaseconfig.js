import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "key",
  authDomain: "desafiolatamm7crudfirabase1.firebaseapp.com",
  projectId: "desafiolatamm7crudfirabase1",
  storageBucket: "desafiolatamm7crudfirabase1.firebasestorage.app",
  messagingSenderId: "128743566067",
  appId: "1:128743566067:web:559b3fe95e980b6806a586",
  measurementId: "measure-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db };
