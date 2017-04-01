const config = require('../webpack.config');
const webpack = require('webpack');
const webPackDevMiddleware = require('webpack-dev-middleware');
const webPackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const compiler = webpack(config);

app.use(webPackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webPackHotMiddleware(compiler));
app.use(express.static('./dist'));

app.use('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

server.listen(port, (error) => {
  if (error) throw error;
  console.log('Express server listening on port', port);
});
