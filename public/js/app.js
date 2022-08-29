
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB0xYXJW8tS_Y_tiSBuVWTgSJ7PIWdzDDo",
    authDomain: "project-x-690a8.firebaseapp.com",
    databaseURL: "https://project-x-690a8-default-rtdb.firebaseio.com",
    projectId: "project-x-690a8",
    storageBucket: "project-x-690a8.appspot.com",
    messagingSenderId: "434893165149",
    appId: "1:434893165149:web:8eaf44bfbf50f5af28f3b4",
    measurementId: "G-8XS8KX9FBL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);