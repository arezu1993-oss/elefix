// Import essential core modules for server configuration
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Configure environment mode and port settings dynamically
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Initialize the Next.js application instance
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Start the server and handle incoming HTTP requests
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL to route requests correctly
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred while handling request', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server successfully started and ready`);
  });
});
