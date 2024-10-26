// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAKJF5Kr3wzjca-g2CxQOVHTvtN8uto_XA",
	authDomain: "power-grader.firebaseapp.com",
	projectId: "power-grader",
	storageBucket: "power-grader.appspot.com",
	messagingSenderId: "473690019576",
	appId: "1:473690019576:web:1885692042a7c194218d0d",
	measurementId: "G-XXCCELKGGN",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);

export { storage };
// const analytics = getAnalytics(app);
