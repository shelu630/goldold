import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCspcVzO6q3d9D39Zb7EOKVsge-Fz7yb1Y",
  authDomain: "goldmind-2e5d9.firebaseapp.com",
  projectId: "goldmind-2e5d9",
  storageBucket: "goldmind-2e5d9.firebasestorage.app",
  messagingSenderId: "599263259110",
  appId: "1:599263259110:web:1384ee9e46ceb9c3374e27",
  measurementId: "G-C3YF3T8JCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.auth = auth;
