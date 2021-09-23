// from studio ghibli at some point

require("dotenv").config()
const { default: axios } = require("axios")
const mockFilm = require('./film.json')

// function getFilm() {
//     if (process.env.ENV == "dev") return mockFilm
//     if (process.env.ENV == "prod") return mockFilm
//     return mockFilm
// }

// axios server

async function getFilm() {
    if (process.env.ENV == "dev") return mockFilm
    axios.get('/user?ID=12345')
    .then((res) => {
        return res
    })
}

module.exports = getFilm