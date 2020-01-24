const express = require('express');

const router = express.Router();

// Controller
const Controller = require('./index');

// Responses
const response = require('../../../network/response');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const token = await Controller.login(req.body.username, req.body.password);
      response.success(req, res, token, 200);
    } catch (error) {
      response.error(req, res, 'Información invalida', 400);
    }
  });

module.exports = router;
