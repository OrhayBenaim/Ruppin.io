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
Copy T_Game.sql located in SQL into MMSQL and execute

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

Add additional notes about how to deploy this on a live system

## Built With

* [Socket.io](https://socket.io/docs/) - The server framework used
