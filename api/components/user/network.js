const express = require('express');

const router = express.Router();

// Controller
const Controller = require('./index');

// Responses
const response = require('../../../network/response');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const userList = await Controller.getUserList();
      response.success(req, res, userList, 200);
    } catch (error) {
      response.error(req, res, error, 500);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const user = await Controller.getUserByID(req.params.id);
      response.success(req, res, user, 200);
    } catch (error) {
      response.error(req, res, error, 500);
    }
  });

module.exports = router;
