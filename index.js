const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('🚀 Docker + Express 서버가 정상 동작합니다!');
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중...`);
});