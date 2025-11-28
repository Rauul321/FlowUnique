const {Sequelize} = require('sequelize');

const sequelize  = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../modules/User.js')(sequelize, Sequelize);

module.exports = db;
