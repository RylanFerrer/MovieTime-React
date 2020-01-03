const express = require('express');
const router = express.Router()
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")



router.get('/', async(req,res) => {
    const searchString = (media) => `${API.URL}search/${media}${API_KEY}&language=en-US&query=${req.query.searchVal}&page=1&include_adult=false`
    const [results,showResults] = await Promise.all([axios.get(searchString("movie")), axios.get(searchString("tv"))])
    res.send({movies:results.data, shows: showResults.data})
})
module.exports = router