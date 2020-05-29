module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    googleId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
  };

  return User;
};