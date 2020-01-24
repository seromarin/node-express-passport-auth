const jwt = require('jsonwebtoken');

// Utils
const getToken = auth => {
  if (!auth) {
    throw new Error('No viene token');
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw new Error('Formato invalido');
  }

  const token = auth.replace('Bearer ', '');
  return token;
};

const verify = token => jwt.verify(token, 'secreto');

const decodeHeader = req => {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
};

// Methods

const sign = (data) => jwt.sign(data, 'secreto');

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
  }
}



module.exports = {
  sign,
};
