import { initializeApp, cert, getApp} from 'firebase-admin/app';
import admin from 'firebase-admin'
import {Firestore, getFirestore, Timestamp, FieldValue }from 'firebase-admin/firestore';
import App from 'next/app';
import {Storage} from '@google-cloud/storage';


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

const storage = new Storage({
  projectId: "ln-jukebox",
  credentials: credential 
})


export {
  db,
  storage
};