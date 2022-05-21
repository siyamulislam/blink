import * as  firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config';


export const initializeLoginFramework = () => {
  if (firebase.getApps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const handelGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const { email, displayName, photoURL } = user;
    const signIndUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      url: photoURL,
    };
    sessionStorage.setItem('loggedInUser', JSON.stringify(signIndUser));
    return signIndUser;
  } catch (error) {
    console.log(error);
  }
}




