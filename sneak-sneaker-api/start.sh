cat > /usr/src/app/database/credentials.js <<EOF
module.exports = {
	host: process.env.HOST,
	port: process.env.PORT,
	database: process.env.DATABASE,
	username: process.env.USERNAME,
	password: process.env.PASSWORD
}
EOF

yarn install

node ./utilities/dbOnlineTest.js

yarn start
