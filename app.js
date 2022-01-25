'use strict'

const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});