import * as firebase from 'firebase'
import '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC35yeeZ9gwsQ_7pXrC8lgbs2OGDUuxkYo",
    authDomain: "instafeed-610cf.firebaseapp.com",
    databaseURL: "https://instafeed-610cf.firebaseio.com",
    projectId: "instafeed-610cf",
    storageBucket: "instafeed-610cf.appspot.com",
    messagingSenderId: "748897101007",
    appId: "1:748897101007:web:f44ed5b1293b1dfeec83ba",
    measurementId: "G-7CCXBFWPSY"
  };


const Firebase=firebase.initializeApp(firebaseConfig);
export default Firebase;