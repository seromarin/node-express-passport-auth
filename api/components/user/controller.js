const nanoid = require('nanoid');
let store = require('../../../store/dummy');

const TABLE = 'user';

module.exports = (injectedStore) => {
  if (injectedStore) {
    store = injectedStore;
  }

  const getUserList = () => store.list(TABLE);

  const getUserByID = (id) => store.get(TABLE, id);

  const userUpsert = (body) => {
    const user = {
      id: null,
      name: body.name,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    return store.upsert(TABLE, user);
  };

  return {
    getUserList,
    getUserByID,
    userUpsert,
  };
};
