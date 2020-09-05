import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCo0vxkbk4Px6djuDikpEP0XNir0qRcWgg",
    authDomain: "soa-classroom-d69ac.firebaseapp.com",
    databaseURL: "https://soa-classroom-d69ac.firebaseio.com",
    projectId: "soa-classroom-d69ac",
    storageBucket: "soa-classroom-d69ac.appspot.com",
    messagingSenderId: "387435467074",
    appId: "1:387435467074:web:96dcb9ca84a1daaddb38db",
    measurementId: "G-JN73CTKGXM"
  };

var fireDb= firebase.initializeApp(firebaseConfig);

export default fireDb;

