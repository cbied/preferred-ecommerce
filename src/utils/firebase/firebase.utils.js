import { initializeApp  } from 'firebase/app';
import { getAuth, 
         signInWithPopup,
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut  } from "firebase/auth";
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
  const googleProvider = new GoogleAuthProvider()
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const db = getFirestore()
  export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)