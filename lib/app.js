const express = require('express');
const app = express();
const colors = [
 
];

app.use(express.static('./public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

module.exports = {
  app
};
