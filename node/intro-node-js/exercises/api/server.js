const http = require('http');
const url = require('url');
const fs = require('fs/promises');
const path = require('path');
const mime = require('mime');

/**
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = async (name) => {
  const assetPath = path.join(__dirname, 'assets', name);
  try {
    return fs.readFile(assetPath, { encoding: 'utf-8' });
  } catch (error) {
    throw new Error('Asset not found');
  }
}

const router = {
  '/ GET': {
    asset: 'index.html',
    type: mime.getType('html')
  },
  '/style.css GET': {
    asset: 'style.css',
    type: mime.getType('css')
  }
}

const hostname = '127.0.0.1';
const port = 3000;

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route) => console.log(method, route)

const server = http.createServer(async (req, res) => {
  const method = req.method
  const route = url.parse(req.url).pathname
  const routeMatch = router[`${route} ${method}`];

  logRequest(method, route);

  if (!routeMatch) {
    res.writeHead(404);
    return res.end();
  }

  const { type, asset } = routeMatch;
  res.writeHead(200, { 'Content-Type': type });
  res.write(await findAsset(asset));
  res.end();
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})