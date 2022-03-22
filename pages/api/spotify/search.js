export default function handler(req, res) {
    if(req.query && req.query.access_token && req.query.q) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + req.query.access_token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.spotify.com/v1/search?q=" + req.query.q + "&type=track&limit=10", requestOptions)
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
