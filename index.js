const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Docker + Express 서버가 정상 동작합니다!');
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중...');
});