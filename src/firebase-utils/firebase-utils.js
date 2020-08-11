import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDOpyzBAuco-W4uWkKf2pFLt1skhrtvEQQ",
    authDomain: "crwn-db-fbfc1.firebaseapp.com",
    databaseURL: "https://crwn-db-fbfc1.firebaseio.com",
    projectId: "crwn-db-fbfc1",
    storageBucket: "crwn-db-fbfc1.appspot.com",
    messagingSenderId: "59300038958",
    appId: "1:59300038958:web:804ae6048b396e0df792bf"
  };


export const createUserProfileDocument = async (userAuth, otherUserDetails) => {
  
  if(!userAuth) return;
  // query firestoredatabase

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();
  
  if(!userSnapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
      try {
        await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherUserDetails
      })
    } catch (err) {
      console.log('Error creating user',err)   
      }
    
}

return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
  });

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;