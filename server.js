const express = require("express");
//const mongoose = require("mongoose");
const routes = require("./routes/API");
const app = express();
const PORT = process.env.PORT || 3001;
//const Application = require("./client/src/App");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes)

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/betStreamdb");

app.listen(PORT, () => {
    console.log("Server on localhost:" + PORT)
})