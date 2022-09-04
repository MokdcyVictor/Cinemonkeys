import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
const firebaseApp = initializeApp({
  apiKey: "AIzaSyB0xYXJW8tS_Y_tiSBuVWTgSJ7PIWdzDDo",
  authDomain: "project-x-690a8.firebaseapp.com",
  databaseURL: "https://project-x-690a8-default-rtdb.firebaseio.com",
  projectId: "project-x-690a8",
  storageBucket: "project-x-690a8.appspot.com",
  messagingSenderId: "434893165149",
  appId: "1:434893165149:web:8eaf44bfbf50f5af28f3b4",
  measurementId: "G-8XS8KX9FBL"
});
// TODO: Replace the following with your app's Firebase project configuration
const auth = getAuth(firebaseApp);
const email = document.getElementById('email').value
const password = document.getElementById('password').value

onAuthStateChanged(auth, user =>{
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
// firebase deploy --token "$1//0hGygStyCIwYJCgYIARAAGBESNwF-L9Irdhg_PzQGkNn0a_Uzg_dJjqfQzAq-S9Kw_eQAuUeIRv_--gbIsXot6c04jUEfZnGkcWA"