import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {
  var clientId = '11c8f8b9406d4ced992462b21ad42e02';
  var clientSecret = '9ac97717ceb74c0a903a6ca9c388e70e';

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  const spotify = await axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify(data),
    headers
  ).then(response => {
    return response.data;
  })

  res.status(200).json({success: 'true', token: spotify});


}

export default spotify