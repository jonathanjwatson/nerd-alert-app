module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  User.associate = function (models) {
    User.belongsToMany(models.Game, {
      through: "UserGames",
      foreignKey: "userId",
    });
  };

  return User;
};
