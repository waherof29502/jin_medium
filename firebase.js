// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCI6GF82a2Vt-Yx6HT70N1YNzrZhRyr7fY',
  authDomain: 'jin-medium.firebaseapp.com',
  projectId: 'jin-medium',
  storageBucket: 'jin-medium.appspot.com',
  messagingSenderId: '50528458023',
  appId: '1:50528458023:web:f271b0e6cc929a8faf0502',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
