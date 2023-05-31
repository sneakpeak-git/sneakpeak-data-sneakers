const { fBold } = require("../utilities/textFormatter");
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = './database/credentials.js';

function getUserInput(question) {
    return new Promise(resolve => {
        readline.question(question, answer => {
        resolve(answer);
        });
    });
}

async function getCredentials() {
    try {
        if (!fs.existsSync(fileName)) {
        console.log('👋', fBold('Welcome to Sneaker API!'), '\n\nTo use this app, you will need to provide credentials\nfor accessing your SneakPeak MySQL database below.\n');

        const host = await getUserInput('Host (empty for localhost): ');
        const port = await getUserInput('\nPort (empty for 3306): ');
        var schema = await getUserInput('\nSchema (empty for sneakpeak): ');
        if (schema === '') schema = 'sneakpeak';
        const username = await getUserInput('\nUsername: ');
        const password = await getUserInput('\nPassword: ');

        const format = `module.exports = {\n\thost: '${host}',\n\tport: '${port}',\n\tdatabase: '${schema}',\n\tusername: '${username}',\n\tpassword: '${password}'\n}`;
        fs.writeFileSync(fileName, format);

        console.log(fBold('\n\nCredentials saved!\n\n'));
        }
    } catch (error) {
        console.error('Error getting credentials:', error);
    } finally {
        readline.close();
    }
}

function resetCredentials() {
    fs.unlink(fileName, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('🔄', fBold('Database credentials are now reset!'), '\nSetup will run on next boot.\n');
    });
}

module.exports = {
    getCredentials,
    resetCredentials
};