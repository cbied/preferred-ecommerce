import { initializeApp  } from 'firebase/app';
import { getAuth, 
         signInWithPopup, 
         signInWithRedirect, 
         GoogleAuthProvider } from "firebase/auth";
import {
         getFirestore,
         doc,
         getDoc,
         setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAS4_oVvOV2bL4alZ5HEu3b2J8Ka8sWR10",
    authDomain: "preferred-ecommerce-db.firebaseapp.com",
    projectId: "preferred-ecommerce-db",
    storageBucket: "preferred-ecommerce-db.appspot.com",
    messagingSenderId: "848803677559",
    appId: "1:848803677559:web:8fe3d47461d9dd508b4d72"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  export const db = getFirestore()
  export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userDocRef;
}