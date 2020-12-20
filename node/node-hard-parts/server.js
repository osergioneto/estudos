const http = require('http');
const fs = require('fs/promises');
const path = require('path');

async function doOnRequest(request, response) {
  // Send back a message saying "Welcome to Twitter"
  // code here...
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    const file = await fs.readFile(path.join("index.html"));
    console.log("file: ", file.toString());
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(file);
    response.end();
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("hi back to you!");
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...

  }
  else {
    // Handle 404 error: page not found
    // code here...

  }
}

const server = http.createServer(doOnRequest)

server.listen(3000, () => {
  console.log("Running server 🚀");
});
