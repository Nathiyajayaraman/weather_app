const express = require('express');
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");//callpublic dir

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get('/about', function (req, res) {
  res.render("about");
})

app.get('/help', function (req, res) {
  res.render("help");
})

app.get('/', function (req, res) {
  res.render("home");
});

app.listen(3000, function () {
  console.log("The server is up on port 3000");
})