const express = require('express');
const axios = require('axios')
const API_KEY = require('../../key/key')
const API = require("../../api")
const router = express.Router()

router.get("/:id", async(req,res) => {
    const [actorInfo,movieData, tvData] = await Promise.all([axios.get(`${API.URL}person/${req.params.id}${API_KEY}`),axios.get(`${API.URL}person/${req.params.id}/movie_credits${API_KEY}`),axios.get(`${API.URL}person/${req.params.id}/tv_credits${API_KEY}`)])
    res.send({actor: actorInfo.data,movies:movieData.data,television:tvData.data})
});

module.exports = router