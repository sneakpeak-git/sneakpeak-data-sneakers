const { Sequelize } = require('sequelize');
const credentials = require('./credentials');

const sequelize = new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: credentials.host,
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection successful');
}).catch(err => {
    console.error('Unable to connect to the database:', err.original.sqlMessage);
}).finally(() => {
    console.log('To change the database configuration, delete /database/credentials.js')
});

module.exports = sequelize;