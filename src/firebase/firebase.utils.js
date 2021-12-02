// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlnlgClAg3RJ6rJLWZhuPux-QPBgnxwRs',
  authDomain: 'crowndb-476da.firebaseapp.com',
  projectId: 'crowndb-476da',
  storageBucket: 'crowndb-476da.appspot.com',
  messagingSenderId: '359733918409',
  appId: '1:359733918409:web:bc05ca44de98ffd2e7eb18',
  measurementId: 'G-X7K8PGG32J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const firebaseConfig = {
//   apiKey: 'AIzaSyBlnlgClAg3RJ6rJLWZhuPux-QPBgnxwRs',
//   authDomain: 'crowndb-476da.firebaseapp.com',
//   projectId: 'crowndb-476da',
//   storageBucket: 'crowndb-476da.appspot.com',
//   messagingSenderId: '359733918409',
//   appId: '1:359733918409:web:bc05ca44de98ffd2e7eb18',
//   measurementId: 'G-X7K8PGG32J',
// };

export const auth = getAuth(app);
//export const firebase = app.firestore();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// signOut(auth)
//   .then(() => {
//     console.log('signOut');
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     console.log(error);
//     // An error happened.
//   });
