const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./movie/routes')(app);

app.listen(PORT, () => {
  console.log('Server listening on port : ', PORT);
});
