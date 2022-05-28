import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBjh7R7l6f9rTW8Oll_uzx2q50uJNWRjbU',
    authDomain: 'resume-builder-c4248.firebaseapp.com',
    projectId: 'resume-builder-c4248',
    storageBucket: 'resume-builder-c4248.appspot.com',
    messagingSenderId: '790181104761',
    appId: '1:790181104761:web:3f3e105c4d46cd7c09d8a8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;
