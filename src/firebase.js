import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmklTBSj5U9RQ1M1aLUs0HhT7KHTWgpFE",
  authDomain: "webapps-224c8.firebaseapp.com",
  databaseURL: "https://webapps-224c8.firebaseio.com",
  projectId: "webapps-224c8",
  storageBucket: "webapps-224c8.appspot.com",
  messagingSenderId: "47874462184",
  appId: "1:47874462184:web:f01ff0e81f93d58b88545d",
  measurementId: "G-NXB8B543PS"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app
 export const auth = getAuth();
 export const db = getFirestore(app);