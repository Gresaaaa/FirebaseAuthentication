
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZnnWzt7HcuKIMPtkRmieWYy2t0rm0wiY",
  authDomain: "ppm-projekti.firebaseapp.com",
  projectId: "ppm-projekti",
  storageBucket: "ppm-projekti.appspot.com", 
  messagingSenderId: "735682835784",
  appId: "1:735682835784:web:f7a8206c7be7753d59ef7d",
  measurementId: "G-6EDGRXJQLX"
};


const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
