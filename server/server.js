const path = require('path');
const express = require('express');

const app = express();
const webpackDevHelper = require('./server.dev');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.CLIMBMAN_PORT || '5555';

if (isDev) {
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    app.use(express.static('dist'));
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
