const Router = require('hermesjs/lib/router');
const router = new Router();
const collectionsHandler = require('../handlers/collections');
module.exports = router;

/**
 * get collection records
 */
router.use('collections', async (message, next) => {
  try {
    await collectionsHandler.collectionsGet({message});
    next();
  } catch (e) {
    next(e);
  }
});
