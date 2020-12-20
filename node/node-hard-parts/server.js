const http = require('http');
const fs = require('fs/promises');
const path = require('path');

async function doOnRequest(request, response) {
  // Tá feio, eu sei
  if (request.method === 'GET' && request.url === '/') {
    const file = await fs.readFile(path.join("index.html"));
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(file);
    response.end();
  } else if (request.method === 'GET' && request.url === '/style.css') {
    const file = await fs.readFile(path.join("style.css"));
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.write(file);
    response.end();
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    await fs.appendFile(path.join("hi_log.txt"), "Somebody said hi.\n");
    return response.end("hi back to you!");
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    let bodyData = '';
    request.on('data', (chunk) => bodyData += chunk);
    request.on('end', async () => {
      let responseMessage = '';
      if (bodyData.startsWith('hello')) {
        responseMessage = "hello there!";
      } else if (bodyData.startsWith("what's up")) {
        responseMessage = "the sky";
      } else {
        responseMessage = "good morning";
      }
      await fs.appendFile(path.join("hi_log.txt"), `${bodyData}\n`);
      return response.end(responseMessage);
    });
  }
  else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end("Error: Not Found.");
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000, () => {
  console.log("Running server 🚀");
});
