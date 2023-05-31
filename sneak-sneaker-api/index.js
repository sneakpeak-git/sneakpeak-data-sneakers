const splashScreen = require('./utilities/splashScreen');
const { getCredentials } = require('./utilities/credentialsManager');
const { fColor} = require("./utilities/textFormatter");

async function startServer() {
    await getCredentials();

    const express = require('express');
    const morgan = require('morgan');
    const commands = require('./utilities/commands');
    const {Sneaker, Image, InsertSamples} = require('./database/sneaker');
    const app = express();

    //if db is empty, insert sample data
    InsertSamples();

    app.use(morgan('dev'));
    
    app.get('/', (req, res) => {
        res.send('The API is up and running! GET /sneakers to retreive the sneaker list.');
    });
    
    app.get('/sneakers', (req, res) => {
        Sneaker.findAll({
            include: [Image]
        }).then(sneakers => {
            res.json(sneakers)
        }).catch(err => {
            if(err.toString().includes('HostNotFoundError'))
                console.error(fColor('Could not connect to database', 'red'));
            else
              console.error(err);
            res.status(500).json({ message: 'An error occurred' });
          });
      });
    
    app.listen(3000, () => {
        console.log(`Server running on port 3000\n`);
    });
}

startServer();
