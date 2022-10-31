import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);