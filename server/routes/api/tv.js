const express = require('express');
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")
const router = express.Router()

router.get("/popular", async(req,res) => {
    const popularMovies =  await axios.get(`${API.URL}tv/popular${API_KEY}`)
    res.send(popularMovies.data)
})
router.get("/latest", async(req,res) => {
    const latestMovies = await axios.get(`${API.URL}movie/now_playing${API_KEY}`)
    res.send(latestMovies.data)
})
router.get("/:id", async(req,res) => {
    const movie = await axios.get(`${API.URL}tv/${req.params.id}${API_KEY}`)
    console.log(movie)
    res.send(movie.data)
})

module.exports = router