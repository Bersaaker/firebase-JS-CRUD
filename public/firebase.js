// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc

} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmH5PWyYNFFGQ7lRFPqxuOKlyDihGOZuk",
  authDomain: "fir-js-crud-5b7bb.firebaseapp.com",
  projectId: "fir-js-crud-5b7bb",
  storageBucket: "fir-js-crud-5b7bb.appspot.com",
  messagingSenderId: "261485829476",
  appId: "1:261485829476:web:939f71bb86563d7009ae71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) =>
  addDoc(collection(db, 'tasks'), { title, description });

const storage = getStorage();

export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deleteTask = id => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id))

export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);

export const saveImage = file => {
  console.log(file);

  const storageRef = ref(storage, `Images/${file.name}`);

  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}