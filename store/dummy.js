const db = {
  user: [
    { id: 1, name: 'Sebastian' },
    { id: 2, name: 'Alejandra' },
    { id: 3, name: 'Sara' },
    { id: 4, name: 'Roberto' },
  ],
};

const list = async (table) => db[table];

const get = async (table, id) => {
  const collection = await list(table);
  const user = collection.filter((item) => item.id === Number(id))[0] || null;
  return user;
};

const upsert = async (table, data) => {
  db[collection].push(data);
};

const remove = async (table, id) => true;


module.exports = {
  list,
  get,
  upsert,
  remove,
};
