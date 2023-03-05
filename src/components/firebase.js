import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDptZfXWpNbgUj93O-JDi9NzUsRY8ap8Ec",
    authDomain: "fb-clone-d0f48.firebaseapp.com",
    projectId: "fb-clone-d0f48",
    storageBucket: "fb-clone-d0f48.appspot.com",
    messagingSenderId: "572971644625",
    appId: "1:572971644625:web:2fb1c9b3eb954f529537f0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider=new firebase.auth.FacebookAuthProvider();
  // const db= firebaseConfig.fireStore;
  // const storage=firebase.storage;
  export {auth,provider} ;