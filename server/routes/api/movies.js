const express = require('express');
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")
const router = express.Router()

router.get("/", async(req,res) => {
    const popularMovies =  await axios.get(`${API.URL}movie/popular${API_KEY}`)
    res.send(popularMovies.data)
})
router.get("/:id", async(req,res) => {
    const movie = await axios.get(`${API.URL}movie/${req.params.id}${API_KEY}`)
    res.send(movie.data)
})

module.exports = router