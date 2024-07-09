
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8hG5EDWDIRgN99WBagmyIY_WlQLcvw-c",
  authDomain: "comm-26107.firebaseapp.com",
  projectId: "comm-26107",
  storageBucket: "comm-26107.appspot.com",
  messagingSenderId: "1039625067200",
  appId: "1:1039625067200:web:9a22b9b7fd0b00909feb25",
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };