import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: process.env.VUE_APP_ENV_API_KEY,
  authDomain: process.env.VUE_APP_ENV_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_ENV_PROJECT_ID,
  storageBucket: process.env.VUE_APP_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_ENV_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ENV_APP_ID,
  measurementId: process.env.VUE_APP_ENV_MESASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();