const { createServer } = require('node:http');

//to import  any module we use =requuire
const fs= require ("fs")   //fs is a module(old method)
import http from "http"    // create module by import

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Hello World </h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
