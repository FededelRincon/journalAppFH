import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBb26nKuv67Eu8Z2eRaipIpb9VWlXgV6VY",
    authDomain: "react-app-cursos-56229.firebaseapp.com",
    projectId: "react-app-cursos-56229",
    storageBucket: "react-app-cursos-56229.appspot.com",
    messagingSenderId: "632064451182",
    appId: "1:632064451182:web:aa61f4b19173608482bc7f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}