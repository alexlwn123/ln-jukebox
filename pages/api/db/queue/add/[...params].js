import {db}from '../../../../../firebase/db'

export default async function handler(req, res) {
  const [songName, bid, spotifyUri] = req.query.params;
  const docRef = db.collection('song-queue').doc(songName);
  if (!(await docRef.get()).exists) { 
    docRef.set({
      bid: parseInt(bid),
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
    const newRef = await (await docRef.get()).data();
    console.log(newRef);
    res.status(200).json({success: true, song: newRef });
}
