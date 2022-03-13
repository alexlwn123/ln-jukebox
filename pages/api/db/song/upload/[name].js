import {storage, db} from '../../../../../firebase/db'

export default async function handler(req, res) {
  const {name} = req.query;
  const docRef = db.collection('song-files').doc(songName);
  const bucket = storage.ref('Songs')

  bucket.u

  if (!(await docRef.get()).exists) { 
    docRef.set({
      songName: songName,
      spotifyUri: spotifyUri
    })
  } else {
    const currDoc = await (await docRef.get()).data();
    await docRef.update({
      bid: parseInt(currDoc.bid) + parseInt(bid),
      songName: songName,
      spotifyUri: spotifyUri
    })
  }

  res.status(200).json({success: true});
}
