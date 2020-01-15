let store = require('../../../store/dummy');

const TABLE = 'user';

module.exports = (injectedStore) => {

  if (injectedStore) {
    store = injectedStore;
  }

  const getUserList = () => store.list(TABLE);

  const getUserByID = (id) => store.get(TABLE, id);

  return {
    getUserList,
    getUserByID,
  };
};
