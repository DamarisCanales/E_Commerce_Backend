# E-Commerce-Back-End

## Description

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Table of Content

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation

Please install the following dependencies to run the application properly:

- npm init --y
- npm install express sequelize mysql2
- npm install dotenv

create .env file and enter the following:

- DB_NAME ='THE DATABASE NAME YOU WANT TO NAME IT'
- DB_USER ='YOUR MYSQL USER NAME'
- DB_PASSWORD ='YOUR PASSWORD FOR MYSQL'


## Usage:

Run the following at the root of the project:

in terminal:
mysql -u root -p

"enter your username and password for mysql"

Enter the following:
source db/schema.sql

quit

npm run seed

npm start

## Contributors:

none

## Tests:

No testing is currently set up


