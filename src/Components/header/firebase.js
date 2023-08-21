import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database';
// Import other services you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBYqNydU7pBxMYcRouiTy3B14OQ8d-EJ8A",
    authDomain: "food-blogging-8cb2a.firebaseapp.com",
    projectId: "food-blogging-8cb2a",
    storageBucket: "food-blogging-8cb2a.appspot.com",
    messagingSenderId: "584970592335",
    appId: "1:584970592335:web:e02ed0afc19493a3e48a3a",
    measurementId: "G-2BP0B5BV12"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication instance
const db = getDatabase(app);

export { auth, db }; // Export other services you want to use
