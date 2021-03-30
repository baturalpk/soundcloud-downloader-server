let express = require('express');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const downloader = require('./downloader')

app.post('/download', async (req, res, next) => await downloader(req, res)
    .then(stream => {
        stream.pipe(res)
    })
    .catch(err => {
        console.log(err)

        if (err.message === undefined)
            res.sendStatus(err.code)
        else {
            res.status(err.status)
            res.send(err.message)
        }
    }
))

module.exports = app;
