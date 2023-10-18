const express = require("express");
const app = express();



app.get("/", (req, res) => {
  res.send("Welcome To Craft-OKR");
});

app.listen("8080", (err) => {
  if (!err) {
    console.log("Port running at 8080");
  } else {
    console.log(`Connection Error: ${err}`);
  }
});
