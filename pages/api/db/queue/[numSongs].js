import{db} from '../../../../firebase/db'

export default async function handler(req, res) {
  const { numSongs } = req.query;
  console.log(numSongs)
  const songsRef = await db.collection('song-queue')
  const docRef = await songsRef.orderBy('bid').limit(parseInt(numSongs)).get();
  let arr = [];
  docRef.forEach(doc => {
    console.log(doc.data());
    arr.push(doc.data());
  })

  res.status(200).json(arr);
}
