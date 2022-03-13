import {storage, db} from '../../../../../../firebase/db'
import { ref } from 'firebase-admin/storage'


const uploadFile = async (SongName, file) => {
  console.log('uploading', SongName);
  console.log('file', file);
  const bucketName = 'ln-jukebox.appspot.com'
  // const path = `${__dirname}/../../../../../../public/songs/${file}.mp3`
  const path = `/Users/alexlwn/Projects/ln-jukebox/public/songs/test.mp3`
  const uri = `https://storage.cloud.google.com/ln-jukebox.appspot.com/song-files/${SongName}.mp3`

  console.log(path)
  await storage.bucket(bucketName).upload(path, {destination: `song-files/${SongName}.mp3`})
  console.log(`${SongName} uploaded to ${bucketName}`);
  return uri;
}


//https://storage.cloud.google.com/ln-jukebox.appspot.com/song-files/testSong.mp3
// /api/db/song/upload/[name]/[file]
export default async function handler(req, res) {
  const {name, file} = req.query;
  const uri = await uploadFile(name, file);
  const docRef = db.collection('song-list').doc(name);


  docRef.set({
    songName: name,
    songUri: uri
  })

  res.status(200).json({success: true, uri: uri});
}
