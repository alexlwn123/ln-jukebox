import { initializeApp, cert, getApp} from 'firebase-admin/app';
import admin from 'firebase-admin'
import {Firestore, getFirestore, Timestamp, FieldValue }from 'firebase-admin/firestore';
import {getStorage} from 'firebase-admin/storage'
import App from 'next/app';

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString()
);

try {
  getApp();
} catch (e) {
  initializeApp({credential: cert(credential)});
}

const db = new Firestore({
  projectId: "ln-jukebox",
  credentials: credential 
});

const storage = getStorage() 
// new Storage({
//   projectId: "ln-jukebox",
//   credentials: credential 
// })

export {
  db,
  storage
};