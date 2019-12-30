const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();

const PORT  = process.env.PORT || 5000;


app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello")
})
app.use("/api/movies", require("./routes/api/movies"))
app.use("/api/tv", require("./routes/api/tv"))

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})