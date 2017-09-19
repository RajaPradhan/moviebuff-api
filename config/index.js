// Check the environment and return the appropriate config
const ENV = process.env.NODE_ENV || 'development';

if(ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
