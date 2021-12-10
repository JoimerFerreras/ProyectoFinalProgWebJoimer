import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR1DSZ4jKjkUyyndNy1tcKc3HKwKtWgt8",
  authDomain: "proyecto-final-joimer.firebaseapp.com",
  projectId: "proyecto-final-joimer",
  storageBucket: "proyecto-final-joimer.appspot.com",
  messagingSenderId: "330627563463",
  appId: "1:330627563463:web:9e7f0b3975b68aa498e3e2"
};

firebase.initializeApp(firebaseConfig);

export const BaseDatos = firebase.firestore();
export default firebase;