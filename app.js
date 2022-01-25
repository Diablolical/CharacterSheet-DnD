'use strict'

const express = require('express')
const path = require('path')

const app = express()

app.set('port', (process.env.PORT) || 5000);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

/*Init*/
app.listen(app.get('port'), () => console.log("Server initiated and listening on port: " + app.get('port')));
