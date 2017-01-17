const express = require('express');

const app = express();

if (!process.env.PORT) {
require('dotenv').config();
}
app.get('/', (req, res) => {
  res.status(200).json({ message: 'weeee'});
});

// app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
