const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const myLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
};

const customHeader = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: 'Missing X-Custom-Header' });
    }
    next();
};

app.use(myLogger);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.post('/protected', customHeader, (req, res) => {
    res.json({ message: 'Access granted!', data: req.body });
});

app.post('/submit', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
    res.json(receivedData);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});
app.get('/services', (req, res) => {
    res.send('Services Page');
});

app.use((req, res) => {
    res.status(404).send('Can\'t find the requested page');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
