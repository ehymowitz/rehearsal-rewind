// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAidUfCXRydWtHrcr5C3EssKLGtIapbwK0",
  authDomain: "rehearsal-rewind.firebaseapp.com",
  projectId: "rehearsal-rewind",
  storageBucket: "rehearsal-rewind.appspot.com",
  messagingSenderId: "23969207464",
  appId: "1:23969207464:web:5b4df86d97354a1f3e1e9d",
  measurementId: "G-PQ29XEHXNT",
  databaseURL: "https://rehearsal-rewind-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Write Data
export const writeRehearsal = (band: string, date: string, link: string) => {
  set(ref(database, "rehearsals/" + band), {
    band,
    date,
    link,
  })
    .then(() => {
      console.log("data saved");
    })
    .catch((error) => {
      console.error(error);
    });
};

// Read Data
export const readRehearsal = (band: string) => {
  const rehersal = ref(database, "rehearsals/" + band);
  onValue(rehersal, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
