// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyA84TZCovFKJ3GGYbEtoe_S2MOppSiMRPo",
    authDomain: "twitter-clone-712ee.firebaseapp.com",
    projectId: "twitter-clone-712ee",
    storageBucket: "twitter-clone-712ee.firebasestorage.app",
    messagingSenderId: "197522308259",
    appId: "1:197522308259:web:b88b73a4fc4ceb75711316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app)
// google sağlayıcısını kur
export const provider = new GoogleAuthProvider()

// storage servisinin referansını al

export const storage = getStorage(app)

// veritabanının refeansını al
export const db = getFirestore(app)


