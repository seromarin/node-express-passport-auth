// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');

// Express app
const app = express();
const http = require('http').createServer(app);

const config = require('../config');

// Use
app.use(bodyParser.json());

// Components
const user = require('./components/user/network');

// Router
const router = express.Router();

// Swagger
const swaggerDoc = require('./swagger.json');

router.get('/', (req, res) => res.json({ hello: 'World' }));
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
router.use('/api/user', user);

app.use(router);

// Run server
http.listen(config.api.port, () => console.log(`Escuchanding on port: ${config.api.port}`));
