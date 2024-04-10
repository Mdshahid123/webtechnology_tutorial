//creating a custom backend using node js
const http=require('http')
const fs=require('fs')
const hostname='localhost'
const portno=80
const home=fs.readFileSync('index.html')
const about=fs.readFileSync('about.html')
const contact=fs.readFileSync('const.html')
const service=fs.readFileSync('services.html')
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
