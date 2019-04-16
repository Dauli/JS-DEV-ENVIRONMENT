import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port = 3000;
const app = express(); // create instense of express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// handle anything to the root '/'
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

// get data from an API, endpoint that returns user's data
app.get('/users', function(req, res) {
  // Hard coded for simplicity. Pretend this is a real database
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id":2, "firstName":"Tommy", "lastName":"Norton", "email":"tnorton@gmail.com"},
    {"id":3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
