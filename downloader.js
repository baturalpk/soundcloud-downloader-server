const scdl = require('soundcloud-downloader').default

module.exports = (req, res) => new Promise((resolve, reject) => {
    let { url } = req.body

    console.log(url)

    url = url.trim()
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")

    const parsed_url = url.split("/")

    if (parsed_url.length > 3)
        reject({ "code": 400, "message": "Wrong URL pattern..." })

    const song_name = (parsed_url[parsed_url.length - 1].length === 1)
        ? parsed_url[parsed_url.length - 2]
        : parsed_url[parsed_url.length - 1]

    if (song_name)
        res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(song_name)}.mp3`)

    if (! url.startsWith("soundcloud.com/"))
        reject({ "code": 400, "message": "Wrong URL pattern..."  })

    scdl.download(`https://${url}`)
        .then(stream => resolve(stream))
        .catch(err => {
            console.log(err)
            reject({ "code": 500 })
        })
})
