import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Firebase Config (same as firebase_config.js, ya usme export kro aur yahan import)
const firebaseConfig = {
  apiKey: "AIzaSyCspcVzO6q3d9D39Zb7EOKVsge-Fz7yb1Y",
  authDomain: "goldmind-2e5d9.firebaseapp.com",
  projectId: "goldmind-2e5d9",
  storageBucket: "goldmind-2e5d9.appspot.com",
  messagingSenderId: "599263259110",
  appId: "1:599263259110:web:1384ee9e46ceb9c3374e27",
  measurementId: "G-C3YF3T8JCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Render reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  'size': 'normal',
  'callback': (response) => {
    // reCAPTCHA solved
  }
});
recaptchaVerifier.render();

// Send OTP
function sendOTP() {
  const phone = document.getElementById('phone').value;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, "+91" + phone, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent!");
    }).catch((error) => {
      alert(error.message);
    });
}

// Verify OTP
function verifyOTP() {
  const otp = document.getElementById('otp').value;
  window.confirmationResult.confirm(otp)
    .then((result) => {
      alert("Phone Verified! Welcome " + result.user.phoneNumber);
    }).catch((error) => {
      alert("Invalid OTP");
    });
}

window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;

