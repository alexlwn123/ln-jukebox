import {btoa} from 'next/dist/server/web/sandbox/polyfills';

export default function handler(req, res) {
    if(req.query && req.query.refresh_token) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET));
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        let urlencoded = new URLSearchParams();
        urlencoded.append("refresh_token", req.query.refresh_token);
        urlencoded.append("grant_type", "refresh_token");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://accounts.spotify.com/api/token", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                res.status(200).json(result)
            })
            .catch(error => {
                console.log('error', error)
                res.status(500).json(error)
            });
    }
    else {
        res.status(400).json('Missing required `refresh_token` param.')
    }
}
