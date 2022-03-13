import {db} from '../../../../firebase/db'

// /api/db/song/list
export default async function handler(req, res) {
  const songsRef = await db.collection('song-list')
  const docRef = await songsRef.get();
  let arr = [];
  docRef.forEach(doc => {
    console.log(doc.data());
    arr.push(doc.data());
  })

  res.status(200).json(arr);
}
