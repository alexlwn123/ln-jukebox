import db from '../../../firebase/db'

export default async function handler(req, res) {
  const [songName, bid] = req.query.params;
  const docRef = db.collection('song-queue').doc(songName);
  docRef.set({
    bid: parseInt(bid)
  })

  const newRef = await (await docRef.get()).data();
  console.log(newRef);

  res.status(200).json({success: true, newBid: newRef.bid });
}
