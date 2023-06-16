# SneakPeak Data API
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sneakpeak-git_sneakpeak-data-sneakers&metric=coverage)](https://sonarcloud.io/summary/new_code?id=sneakpeak-git_sneakpeak-data-sneakers)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sneakpeak-git_sneakpeak-data-sneakers&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=sneakpeak-git_sneakpeak-data-sneakers)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sneakpeak-git_sneakpeak-data-sneakers&metric=bugs)](https://sonarcloud.io/summary/new_code?id=sneakpeak-git_sneakpeak-data-sneakers)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sneakpeak-git_sneakpeak-data-sneakers&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sneakpeak-git_sneakpeak-data-sneakers)

You can set up this app by following these steps:

## Prerequisites

- Ensure that you have followed all instructions provided [here](https://github.com/sneakpeak-git)

## Running With Docker

This app is set up with Docker Compose to allow seamless deployment. All services and config files are automatically initialized and the app works out of the box.

To run this app with Docker, follow these instructions:

- Open your terminal
- Check if you have Docker and Docker Compose already installed by running `docker --version` and `docker compose version` respectively.
- If one of these commands does not return a version number, install these apps by following [these instructions](https://docs.docker.com/compose/install/).
- Navigate to your project directory using the cd command.
- Build and run the containers by using `docker compose up`

## Running Manually

While developing this app it is recommended to run API and database manually.

### Database

For the development environment you need tot set up a MySQL server first:

- Install MySQL Server and optionally Workbench by following [these instructions](https://dev.mysql.com/doc/mysql-getting-started/en/)
- Create a database schema called `sneakpeak` by running `CREATE SCHEMA `sneakpeak`` as an SQL query

### Set up dependencies

- Open your terminal.
- Navigate to your project directory using the `cd` command.
- Install the project's dependencies by running:
    ```
    yarn
    ```
  or
    ```
    yarn install
    ```
- You can add any additional dependencies you might want to use with `yarn add <dependency>`.

### Run your project

- Start the project by running
    ```
    yarn start
    ```
    
## Testing

Tests for this app are ran automatically on each git commit as a part of CI in [GitHub Actions](https://github.com/sneakpeak-git/sneakpeak-data-sneakers/actions), in addition to running the Docker Compose containers and a SonarCloud analysis.

To run tests manually you can use `yarn test`. In this case you can dismiss the Docker container test as it does not apply here.

## Useful Documentation

[Node.js](https://nodejs.org/en/doc)
[Express](https://expressjs.com/)
[MySQL](https://dev.mysql.com/doc/)
[Docker](https://docs.docker.com/)
[Mocha](https://mochajs.org/)
