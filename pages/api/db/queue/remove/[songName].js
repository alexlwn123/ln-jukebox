import {db} from '../../../../../firebase/db'

// /api/db/queue/remove/[songName]
export default async function handler(req, res) {
  const {songName} = req.query;
  const docRef = db.collection('song-queue').doc(songName).delete();
  res.status(200).json({success: true});
}
