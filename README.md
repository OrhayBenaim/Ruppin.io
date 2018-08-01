# Ruppin.IO

IO game made in react and socket.io

## Getting Started

### Installing

### Game and game server
Navigate to the main folder and run

```
npm install
```

Navigate to Server folder and run

```
npm install
```

### SQL
Execute the 'T_Game.sql' file in the SQL console for your chosen SQL server
### Web service
Navigate to Web Service -> WebSite1 -> WebSite1 -> Web.config
Replace 
```
connectionString="Your SQL connection string"
```
You can get the connection string by using the tool 'Connect to Database' located in Tools in visual studio community

## Running the tests

### Game and game server

Navigate to src -> Component -> AJAX.js , change into your web service address
```
const SQL_URL = 'http://192.168.43.72:49873/WebService.asmx';

```
Navigate to src -> Component -> GameLogic.jsx
change into your game server IP address
```
const ip = "192.168.43.72";
```

Navigate to the main folder and run

```
npm start
```
Navigate to Server and run

```
npm start
```

### Web service
Navigate to Web Service -> WebSite1 -> WebSite1
Replace 
Build and run WebService.asmx

## Deployment

* Upload content of the folder Server into your Node.JS supported server
* Run in build folder and upload into your website server
```
npm build
```
* Upload the content of WebSite1 folder located in Web Service -> WebSite1 -> WebSite1 into your web service supported server
* Execute the 'T_Game.sql' file in the SQL console for your chosen SQL server

## Built With

* [Socket.io](https://socket.io/docs/) - The server framework used
