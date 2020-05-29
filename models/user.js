module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    googleId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  User.prototype.sayTitle = function () {
    console.log(this.username)
  }

  User.associate = function(models) {
  };

  User.checkEmail = async function(email) {
    return await this.findOne({ where: { email } });
  }

  User.checkLogin = async function(username) {
    return await this.findOne({ where: { username } });
  }
  return User;
};