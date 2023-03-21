const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);

const MongoClient = require(`mongodb`).MongoClient;

let db;

MongoClient.connect(
  `mongodb+srv://tkdgk1996:FBG9w8AwL8J0p5Zy@cluster0.btnfifg.mongodb.net/?retryWrites=true&w=majority`,
  function (에러, client) {
    if (에러) {
      return console.log(에러);
    }
    db = client.db(`todoapp`);

    app.listen(8080, function () {
      console.log(`Hello`);
    });
  }
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/`, function (req, res) {
  res.sendFile(__dirname + `/index.html`);
});

app.get(`/write`, function (요청, 응답) {
  응답.sendFile(__dirname + `/write.html`);
});

app.post(`/add`, function (요청, 응답) {
  응답.send(`전송완료`);
  db.collection(`post`).insertOne(
    { 제목: 요청.body.title, 날짜: 요청.body.date },
    function (에러, 결과) {
      console.log(`저장완료`);
    }
  );
  console.log(요청.body);
});
