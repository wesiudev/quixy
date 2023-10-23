import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  getDoc,
  setDoc,
  doc,
  addDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
async function getBlogPosts(websiteName) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function addBlogPost(websiteName, post) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "blog"), { posts: [post] });
  } else {
    await updateDoc(doc(db, websiteName, "blog"), {
      posts: arrayUnion(post),
    });
  }
}

export { addBlogPost, getBlogPosts, auth };
