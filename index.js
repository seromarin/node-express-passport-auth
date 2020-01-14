// Requirements
const express = require('express');

// Constants
const PORT = process.env.PORT || 3001;

// Express app
const app = express();
const http = require('http').createServer(app);

const router = express.Router();

router.get('/', (req, res) => res.json({ hello: 'World' }));

http.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
