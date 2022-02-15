const express = require('express');
const path = require('path');
const apiController = require('./api/controllers/api-controller');

const router = express.Router();

router.get('/api/load/:characterId', apiController.getCharacter);
router.post('/api/load/:characterId', apiController.saveCharacter);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;
