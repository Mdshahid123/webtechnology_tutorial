//serving a file(backend) using node.js

// to create a server we require a http module
const http=require('http')
const fs=require('fs')
const filecontent=fs.readFileSync('del.txt')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent)
})
server.listen(80,'localhost',()=>{
    console.log("listing on port no 80");
})