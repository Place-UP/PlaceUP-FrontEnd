import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCE7X-bXi4vilg8lwDmR11gH1X8y39fmkg",
    authDomain: "placeup-51bb9.firebaseapp.com",
    projectId: "placeup-51bb9",
    storageBucket: "placeup-51bb9.appspot.com",
    messagingSenderId: "690746032319",
    appId: "1:690746032319:web:c2224187c266513368060a"
};

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }

