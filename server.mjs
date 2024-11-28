import {createServer} from "node.http";

const server = createServer((request , response) =>{
    console.log("response recived")
    response.statusCode= 200;
    response.setHeader(`Content-Type`, `text/html`);
    response.end("<html><body><h1>Questa pagina è sul sevrver di Node.js</h1></body></html>");
});

server.listen(3000, ()=>{
    console.log("server is running at http://localhost.3000")
});