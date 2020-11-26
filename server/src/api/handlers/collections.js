const handler = (module.exports = {});

/**
 * get collection records
 * @param {object} options
 * @param {object} options.message
 */
const collections = [];
handler.collectionsGet = async ({ message }) => {
  // Implement your business logic here...
  const { payload } = message;
  console.log(message.headers);
  let id = 1;
  for (let i = 0; i < collections.length; i++) {
    if (collections[i].id === id) id++;
  }
  collections.push({
    id,
    createdAt: new Date(),
    data: payload,
  });
  console.log(collections);
};
