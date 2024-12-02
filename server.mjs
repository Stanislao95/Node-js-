import {createServer} from "node:http";

const server = createServer((request , response) =>{
    console.log("response recived")
    response.statusCode= 200;
    response.setHeader(`Content-Type`, `appliction/json`);
    const jsonResponseBody = JSON.stringify({location: "Mars"})
    response.end(jsonResponseBody)
});

server.listen(3000, ()=>{
    console.log("server is running at http://localhost.3000")
});