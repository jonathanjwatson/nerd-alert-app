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

app.get("/api/user/:id", function (req, res) {
  db.User.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: db.Game
      },
    ],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.post("/api/user", function (req, res) {
  db.User.create({ name: "LegoHunter19" }).then((result) => {
    console.log(result.dataValues);
    res.json(result.dataValues);
  });
});

app.post("/api/game", function (req, res) {
  db.Game.create({ title: "Harry Potter DnD3" }).then((result) => {
    console.log(result.dataValues);
    db.UserGames.create({ userId: 1, gameId: result.dataValues.id }).then(
      (result) => {
        console.log(result);
        res.json(result.dataValues);
      }
    );
  });
});

app.get("/config", function (req, res) {
  res.json({
    error: false,
    success: true,
    test: false,
  });
});

db.sequelize.sync({force: true}).then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
