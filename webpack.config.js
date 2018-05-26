var isProd = process.env.NODE_ENV === 'productions';

if (isProd) {
  module.exports = require('./config/webpack.prod.js');
} else {
  module.exports = require('./config/webpack.dev.js');
}

// module.exports = require('./config/webpack.prod.js');
