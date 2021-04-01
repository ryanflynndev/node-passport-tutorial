const express = require('express');

const app = express();

app.set('view-enginer', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(8080);