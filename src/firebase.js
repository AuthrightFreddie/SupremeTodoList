import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyACJEvTMbIdzn84UyNDXBVMeO5HJxauBTc",
    authDomain: "supremetodolist.firebaseapp.com",
    databaseURL: "https://supremetodolist.firebaseio.com",
    projectId: "supremetodolist",
    storageBucket: "supremetodolist.appspot.com",
    messagingSenderId: "494855089032",
    appId: "1:494855089032:web:5265d5fb504a30cb07683d"
})

export { firebaseConfig as firebase };