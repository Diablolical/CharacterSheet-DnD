const router = require('express').Router();
const path = require('path');
const apiController = require('./api/controllers/api-controller');

router.get('/api/character/:characterId', apiController.getCharacter);
router.post('/api/character/:characterId', apiController.saveCharacter);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;
