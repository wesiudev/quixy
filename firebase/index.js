import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const websiteName = process.env.NEXT_PUBLIC_APP_NAME;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

async function getBlogPosts() {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

async function addBlogPost(post) {
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
async function updateBlogPost(postId, updatedPost) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  const posts = docSnap.data().posts;
  const postIndex = posts.findIndex((post) => post.postId === postId);
  if (postIndex === -1) {
    throw new Error("Blog post not found");
  }
  posts[postIndex] = updatedPost;
  await updateDoc(doc(db, websiteName, "blog"), {
    posts: posts,
  });
}
async function createOrder(req) {
  const docRef = doc(db, websiteName, "orders");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "orders"), { orders: [req] });
  } else {
    await updateDoc(doc(db, websiteName, "orders"), {
      orders: arrayUnion(req),
    });
  }
}

export {
  addBlogPost,
  getBlogPosts,
  auth,
  createOrder,
  storage,
  updateBlogPost,
};
