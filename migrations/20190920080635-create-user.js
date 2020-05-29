const MAX_LENGTH = 50;
const MAX_EMAIL_LENGTH = 100;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING(MAX_EMAIL_LENGTH),
        unique: true
      },
      googleId: { type: Sequelize.STRING(MAX_LENGTH) },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: { type: Sequelize.STRING(MAX_LENGTH) },
      password: { type: Sequelize.STRING },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
