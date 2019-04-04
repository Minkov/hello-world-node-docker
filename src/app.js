const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App running at ${port}`));

const items = [];

app.get('/', (req, res) => {
    res.send(items);
});

app.post('/', (req, res) => {
    const item = req.body;
    item.id = Math.max(0, ...items.map(x => x.id)) + 1;
    items.push(item);
    res.status(201)
        .send(item);
});
