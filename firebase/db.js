import { initializeApp, applicationDefault } from 'firebase-admin/app';
import admin from 'firebase-admin'
import {Firestore, getFirestore, Timestamp, FieldValue }from 'firebase-admin/firestore';

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString()
);

const db = new Firestore({
  projectId: "ln-jukebox",
  credentials: credential 
});

export default db;