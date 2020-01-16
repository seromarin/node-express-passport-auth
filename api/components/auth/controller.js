let store = require('../../../store/dummy');

const TABLE = 'auth';

module.exports = (injectedStore) => {
  if (injectedStore) {
    store = injectedStore;
  }

  async function login(username, password) {
    const data = await store.query(TABLE, { username })

  }

  function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
    login,
  };
};
