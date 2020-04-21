# MyDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## FAQ's

- How to connect to my MONGODB?<br>

Add your own MONGODB String to nodemon.json in the root folder under: <br>
  "MONGO_STRING": YOUR_KEY
  
- How to use my own KEY for signing JWT Tokens. <br>

Add your own KEY String to nodemon.json in the root folder under: <br>
  "KEY": YOUR_KEY
  

## Pages / Components

/Login <br>
/Register <br>
/Charts <br>
/Profile <br>
/Accounts <br>
/Dashboard - embeded in Default as the default view.

## Features

AuthGuard: Used to protect routes from unregistered users. If user is not authorized then they are redirected to the Login Page.

Controllers: User middleware to validate user login and creation is in the user.js controller.

Global variables: nodemon.js holds global data such as DB string and KEY for JWT Token signing.
