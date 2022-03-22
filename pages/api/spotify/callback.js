import {btoa} from 'next/dist/server/web/sandbox/polyfills';
import querystring from 'querystring';

export default function handler(req, res) {
    if(req.query && req.query.code) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET));
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        let urlencoded = new URLSearchParams();
        urlencoded.append("code", req.query.code);
        urlencoded.append("redirect_uri", process.env.SPOTIFY_REDIRECT_URI);
        urlencoded.append("grant_type", "authorization_code");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://accounts.spotify.com/api/token", requestOptions)
            .then(response => response.text())
            .then(result => {
                let json = JSON.parse(result)
                res.redirect('/?' +
                  querystring.stringify({
                      auth_result: result
                  }));
            })
            .catch(error => {
                console.log('error', error)
                res.status(500).json(error)
            });
    }
    else {
        res.status(400).json('Missing required `code` param.')
    }
}
