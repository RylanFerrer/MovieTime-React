const express = require('express');
const router = express.Router()
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")

router.get('/', async(req,res) => {
    const results = await axios.get(`${API.URL}search/movie${API_KEY}&language=en-US&query=${req.query.searchVal}&page=1&include_adult=false`)
    res.send(results.data)
})
module.exports = router