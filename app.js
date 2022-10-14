const http = require('http');
/*how you import files in nodejs. 
Either takes a path or http needs to start with ./ or /
if you don't import anything with ./ or / and just type in a name you end
up looking for a global module in this case you access nodes http module*/


// function rqListener(req, res) {

// }
//http.createServer(rqListener);
//create server is self explanitory however the createServer
/*function takes in two arguments the incoming request and the response
 */

const routes = require('./route');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     /*req or request sends back a full report of a request however we don't need all
//     of that information just a few. You can seperate req and let it only report certain things such as
//     the url, method, and the response headers */

// }); // you can also just use a fat arrow function and save it within a const 

// const express = require('express'); // exports a function named e(express) to use the express middleware

// const app = exppress();

const server = http.createServer(routes);

server.listen(3000); //starts a process to listen (wait) for incoming request
//WARNING!! In production you usually don't fill it out but for this example we need to make it local