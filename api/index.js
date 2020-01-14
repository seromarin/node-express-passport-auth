// Requirements
const express = require('express');

// Express app
const app = express();
const http = require('http').createServer(app);

const config = require('../config');

// Components
const user = require('./components/user/network');

// Router
const router = express.Router();

router.get('/', (req, res) => res.json({ hello: 'World' }));
router.use('/api/user', user);

app.use(router);

// Run server
http.listen(config.api.port, () => console.log(`Escuchanding on port: ${config.api.port}`));
