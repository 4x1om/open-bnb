const firebaseConfig = { // process broke so hard coding and revoking api key after hackathon
	apiKey: "...", // broke so hard code :( process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "...", // process.env.REACT_APP_AUTH_DOMAIN,
	projected: "...", // process.env.REACT_APP_PROJECT_ID,
	storageBucket: "...", // process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: "...", // process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: "...", // process.env.REACT_APP_APP_ID,
	measurementId: "...", // process.env.REACT_APP_MEASUREMENT_ID,
};

console.log(process.env)

export default firebaseConfig;
