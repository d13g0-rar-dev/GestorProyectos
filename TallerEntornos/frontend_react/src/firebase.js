// Importa solo las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, collectionGroup } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTOkRk-MFn1rxQMxlcI4hxC57J_k3A9g4",
  authDomain: "worldwideworks-3dbca.firebaseapp.com",
  projectId: "worldwideworks-3dbca",
  storageBucket: "worldwideworks-3dbca.appspot.com",
  messagingSenderId: "835217704236",
  appId: "1:835217704236:web:52dc71f52cdd6b62a5d889",
  measurementId: "G-L6TW1SZC34",
  databaseURL: "https://worldwideworks-3dbca-default-rtdb.firebaseio.com",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Inicializa Storage
const storage = getStorage(app);

// Accede a una colección

export{ storage, db, app, firebase};

