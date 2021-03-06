const express = require('express');
const cors = require('cors');
const app = express();

const PORT  = process.env.PORT || 5000;


app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello")
})
app.use("/api/movies", require("./routes/api/movies"))
app.use("/api/actor", require("./routes/api/actor"))
app.use("/api/tv", require("./routes/api/tv"))
app.use("/api/search", require('./routes/api/search'))

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})