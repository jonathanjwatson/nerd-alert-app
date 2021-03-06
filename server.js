const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// const catRoutes = require("./controllers/catsController.js");

// app.use(catRoutes);

app.get("/", function (req, res) {
  db.Game.findAll({}).then((games) => {
    console.log(games);
    res.render("index", { games });
  });
});

app.get("/config", function (req, res) {
  res.json({
    error: false,
    success: true,
    test: false
  });
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
