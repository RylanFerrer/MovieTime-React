const express = require('express');
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")
const router = express.Router()

router.get("/popular", async(req,res) => {
    const popularMovies =  await axios.get(`${API.URL}movie/popular${API_KEY}`)
    res.send(popularMovies.data)
})
router.get('/similar/:id', async(req,res) => {
    const similar = await axios.get(`${API.URL}movie/${req.params.id}/similar${API_KEY}`)
    res.send(similar.data)
})
router.get("/cast/:id",async(req,res)=> {
    try {
        const cast = await axios.get(`${API.URL}movie/${req.params.id}/credits${API_KEY}`)
        res.send(cast.data)
    } catch(err) {
        res.sendStatus(400)
    }
});
router.get("/latest", async(req,res) => {
    const latestMovies = await axios.get(`${API.URL}movie/now_playing${API_KEY}`)
    res.send(latestMovies.data)
})
router.get("/:id", async(req,res) => {
    const movie = await axios.get(`${API.URL}movie/${req.params.id}${API_KEY}`)
    res.send(movie.data)
})

module.exports = router