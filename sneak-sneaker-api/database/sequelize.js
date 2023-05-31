const { Sequelize } = require('sequelize');
const credentials = require('./credentials');
const { fBold } = require("../utilities/textFormatter");

const sequelize = new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: credentials.host,
    port: credentials.port,
    dialect: 'mysql',
    logging: false
});

sequelize.query('select * from sneakers').then(() => {
    console.log('✅', fBold('Database connection successful!'));
}).catch(err => {
    if(err.original.sqlMessage === undefined)
        console.error('❌', fBold('Unable to connect to the database.'), '\nPlease ensure your MySQL server is running and you set the correct host and port:', '\n\n' + credentials.host + ':' + credentials.port);
    else
        console.error('❌', fBold('Unable to connect to the database.'), '\n' + err.original.sqlMessage);
    console.log('\nIf you believe you have made a mistake with your MySQL server credentials,\nyou can reset your database configuration by typing', fBold('\'dbreset\''));
}).finally(() => {
    console.log('\nFor more information, type', fBold('\'help\''), '\n');
});

module.exports = sequelize;