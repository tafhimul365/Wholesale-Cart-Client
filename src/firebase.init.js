import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvG_K4WGRKF5fnUEY0e6nLsbSXtfl5cCQ",
  authDomain: "final-project-f9435.firebaseapp.com",
  projectId: "final-project-f9435",
  storageBucket: "final-project-f9435.appspot.com",
  messagingSenderId: "863270452322",
  appId: "1:863270452322:web:68934508623921dd52253b"


};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;