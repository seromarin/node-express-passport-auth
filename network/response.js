exports.success = (req, res, message, status) => {
  const statusCode = status || 500;
  const statusMessage = message || '';

  // Success Message
  res.status(statusCode).send({
    error: false,
    status,
    body: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  const statusCode = status || 500;
  const statusMessage = message || 'Internal server error';

  // Error Message
  res.status(statusCode).send({
    error: true,
    status,
    body: statusMessage,
  });
};
