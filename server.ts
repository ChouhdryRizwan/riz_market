import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Add CORS headers
  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://riz-market-place-chouhdryrizwan.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  // Handle Next.js requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('Server is running on port 3000');
  });
});
