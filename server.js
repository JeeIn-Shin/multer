const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);

const imgRouter = require('./router/img');


app.use('/', imgRouter);


app.listen(app.get('port'), () => {
    console.log(app.get('port'), "빈 포트에서 대기");
});