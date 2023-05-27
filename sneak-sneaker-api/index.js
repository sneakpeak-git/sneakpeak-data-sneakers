const splashScreen = require('./utilities/splashScreen');
const { getCredentials } = require('./utilities/credentialsManager');

async function startServer() {
    await getCredentials();

    const express = require('express');
    const morgan = require('morgan');
    const commands = require('./utilities/commands');
    const Sneaker = require('./database/sneaker');
    const app = express();

    app.use(morgan('dev'));
    
    app.get('/', (req, res) => {
        res.send('The API is up and running! GET /sneakers to retreive the sneaker list.');
    });
    
    app.get('/sneakers', (req, res) => {
        Sneaker.findAll()
          .then(sneakers => res.json(sneakers))
          .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'An error occurred' });
          });
      });
    
    app.listen(3000, () => {
        console.log(`Server running on port 3000\n`);
    });
}

startServer();