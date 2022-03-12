import { initializeApp, applicationDefault } from 'firebase-admin/app';
import admin from 'firebase-admin'
import { getFirestore, Timestamp, FieldValue }from 'firebase-admin/firestore';

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
try {
  !admin.apps.length ? initializeApp({
    credential: applicationDefault()
  }): admin.app();
} catch (e) {
  console.log(e)
}
const db = getFirestore();
export default db;