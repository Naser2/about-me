const express = require('express');

const app = express();

if (!process.env.PORT) {
require('dotenv').config();
}
app.get('/', (req, res) => {
  res.status(200).json({ message: 'weeee'});
});

// app.use(express.static(__dirname + '/'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Runing on port ${port}`);
});
