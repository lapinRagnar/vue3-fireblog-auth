import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_ENV_API_KEY,
  authDomain: process.env.VUE_APP_ENV_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_ENV_PROJECT_ID,
  storageBucket: process.env.VUE_APP_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_ENV_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ENV_APP_ID,
  measurementId: process.env.VUE_APP_ENV_MESASUREMENT_ID
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// const timestamp = app.db.FieldValue.serverTimestamp

export { db }

