const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/beerpostsRoute'));

app.listen(3000);
