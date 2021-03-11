const ENV = process.env.NODE_ENV;

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/grid-trading-strategy/'
      : '/'
  }