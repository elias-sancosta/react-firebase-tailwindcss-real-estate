// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrzyhEwAzlnFpULyHWTpXUa9KeF1yY5dg',
  authDomain: 'real-estate-react-a23fb.firebaseapp.com',
  projectId: 'real-estate-react-a23fb',
  storageBucket: 'real-estate-react-a23fb.appspot.com',
  messagingSenderId: '234918817643',
  appId: '1:234918817643:web:ebef718e3dd6884658a62e',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
