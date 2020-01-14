const express = require('express');

const router = express.Router();

// Responses
const response = require('../../../network/response');

router
  .route('/')
  .get((req, res) => {
    res.send('user OK');
    response.success(req, res, 'Todo correcto', 200);
  });

module.exports = router;
