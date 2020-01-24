const bcrypt = require('bcrypt');

let store = require('../../../store/dummy');
const jwtAuth = require('../../../auth');

const TABLE = 'auth';

module.exports = (injectedStore) => {
  if (injectedStore) {
    store = injectedStore;
  }

  async function login(username, password) {
    let token;
    const data = await store.query(TABLE, { username });

    const validationPassword = await bcrypt.compare(password, data.password);
    if (validationPassword) {
      // Generate token
      token = jwtAuth.sign(data);
    } else {
      throw new Error('Información invalida');
    }
    return token;
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      // authData.password = data.password;
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
    login,
  };
};
