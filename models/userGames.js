module.exports = function (sequelize, DataTypes) {
  var UserGames = sequelize.define("UserGames", {
    userId: { type: DataTypes.INTEGER },
    gameId: {
      type: DataTypes.INTEGER,
    },
  }, {timestamps: false});

  return UserGames;
};
