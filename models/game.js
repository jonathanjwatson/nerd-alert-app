module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Game.associate = function (models) {
    Game.belongsToMany(models.User, {
      through: "UserGames",
      foreignKey: "gameId",
    });
  };

  return Game;
};
