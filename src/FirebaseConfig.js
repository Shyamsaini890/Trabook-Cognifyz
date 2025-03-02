import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {


// Write Your own Firebase api key and all credential


  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
