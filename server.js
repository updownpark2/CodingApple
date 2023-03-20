const express = require(`express`);
const app = express();

app.listen(8080, function () {
  console.log(`Hello`);
});

app.get(`/`, function (req, res) {
  res.sendFile(__dirname + `/index.html`);
});
