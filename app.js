const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(('Hello Balu! this is final pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
