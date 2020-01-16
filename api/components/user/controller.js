const nanoid = require('nanoid');
let store = require('../../../store/dummy');

const auth = require('../auth');

const TABLE = 'user';

module.exports = (injectedStore) => {
  if (injectedStore) {
    store = injectedStore;
  }

  const getUserList = () => store.list(TABLE);

  const getUserByID = (id) => store.get(TABLE, id);

  const userUpsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
      });
    }

    return store.upsert(TABLE, user);
  };

  return {
    getUserList,
    getUserByID,
    userUpsert,
  };
};
