// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOkRk-MFn1rxQMxlcI4hxC57J_k3A9g4",
  authDomain: "worldwideworks-3dbca.firebaseapp.com",
  projectId: "worldwideworks-3dbca",
  storageBucket: "worldwideworks-3dbca.appspot.com",
  messagingSenderId: "835217704236",
  appId: "1:835217704236:web:52dc71f52cdd6b62a5d889",
  measurementId: "G-L6TW1SZC34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
