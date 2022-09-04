import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//doc-get document,getDoc- get document data,setDoc- set document data
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  writeBatch, 
  query,
  getDocs
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASpf43MVwLGINM4Ia9AxaLu2XOnEww4g0",
  authDomain: "my-e-commerce-db-5f9ac.firebaseapp.com",
  projectId: "my-e-commerce-db-5f9ac",
  storageBucket: "my-e-commerce-db-5f9ac.appspot.com",
  messagingSenderId: "611857082181",
  appId: "1:611857082181:web:8b26c8adf4dc9b3eb3802c",
};

// Initialize Firebase,All the CRUD operations are doing with the firebaseApp instance
const firebaseApp = initializeApp(firebaseConfig);

//GoogleAuthProvider is a class so it uses 'new' keyword.There may be different providers
const provider = new GoogleAuthProvider();

//which shows how the auth provider to behave.Here it tells to choose account every time for authentication
provider.setCustomParameters({
  prompt: "select_account",
});

//authentication is same for all,hence it doesnot require 'new' keyword
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//collection creation
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db,collectionKey)

  const batch = writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  });
  await batch.commit()
  console.log('done')
}

//get categories
export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db,'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapShot)=>{
    const {title,items} =docSnapShot.data();
    acc[title.toLowerCase()] = items ;
    return acc;
  },{})
  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth,additionalInformations={}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformations,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password ) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}


export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () =>await signOut(auth);

export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth,callback)