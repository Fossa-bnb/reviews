# reviews

This is the reviews component of the AirBnB room listing page. In this component, the user-submitted reviews and the aggregate rating and subratings of the current listing are displayed on the page. The reviews can be filtered using the search feature to find desired information.

## Getting Started

### Prerequisites

To set up this component, you will need PostgreSQL installed on your machine. Once you have PostgreSQL installed, you can install the project's dependencies by running:
```
npm install
```
After that, you can create and seed the database by running:
```
npm run create-db
```
Next you can bundle your project's files using webpack by running:
```
npm run bundle
```
After your bundle.js file is created, you will need to create a .env file that specifies the host name and port for this app using the variables PORT and HOST.

When you are ready to start the app, turn on the server by running:
```
npm start
```