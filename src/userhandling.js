import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { doc, setDoc, getDoc, arrayUnion } from "firebase/firestore";

import app from "@/auth.js";

// console.log(app)

const auth = getAuth(app);
const db = getFirestore(app);

// console.log(db)

const provider = new GoogleAuthProvider();

function signInWithGoogle() {
	signInWithPopup(auth, provider).then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const user = result.user;
		console.log("User signed in:", user);

		// return user
	});
}

export { signInWithGoogle, auth, db };
