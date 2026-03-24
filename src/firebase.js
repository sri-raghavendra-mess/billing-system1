import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyATImZKj-kISPLYR68wDnmZPNsnItXdiZ4",
  authDomain: "sri-raghavendra-mess-billing.firebaseapp.com",
  projectId: "sri-raghavendra-mess-billing",
  storageBucket: "sri-raghavendra-mess-billing.firebasestorage.app",
  messagingSenderId: "225930121586",
  appId: "1:225930121586:web:5356dc0465009441128deb",
  measurementId: "G-Z2ZSHZNH5H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
const db = getFirestore(app);
const storage = getStorage(app);

export const getTimestamp = serverTimestamp;
export { auth, db, storage, RecaptchaVerifier };
