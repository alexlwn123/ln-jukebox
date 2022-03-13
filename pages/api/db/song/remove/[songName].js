import db from '../../../firebase/db'

export default async function handler(req, res) {
  const [songName] = req.query.params;
  const docRef = db.collection('song-queue').doc(songName).delete();

  res.status(200).json({success: true});
}
