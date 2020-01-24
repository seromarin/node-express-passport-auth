const db = {
  user: [
    { id: 1, name: 'Sebastian' },
    { id: 2, name: 'Alejandra' },
    { id: 3, name: 'Sara' },
    { id: 4, name: 'Roberto' },
  ],
};

const list = async (table) => db[table] || [];

const get = async (table, id) => {
  const collection = await list(table);
  return collection.filter((item) => item.id === Number(id))[0] || null;
};

const upsert = async (table, data) => {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
};

const query = async (table, qr) => {
  const collection = await list(table);
  const keys = Object.keys(qr);
  const key = keys[0];
  return collection.filter((item) => item[key] === qr[key])[0] || null;
};

const remove = async (table, id) => true;


module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
