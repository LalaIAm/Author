import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzO6tt9kvvKoGkG9szOBL6KBpf9Gq2_qY",
  authDomain: "wryter-0t90ft.firebaseapp.com",
  projectId: "wryter-0t90ft",
  storageBucket: "wryter-0t90ft.appspot.com",
  messagingSenderId: "101274519697",
  appId: "1:101274519697:web:fa0d4255d99111cb7e5730",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
