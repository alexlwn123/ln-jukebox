import db from '../../../../firebase/db'

export default async function handler(req, res) {
  const { numSongs } = req.query;
  console.log(numSongs)
  const songsRef = await db.collection('song-queue')
  const docs = await songsRef.orderBy('bid').limit(parseInt(numSongs)).get();
  console.log(docs);
  res.status(200).json(docs)
}
