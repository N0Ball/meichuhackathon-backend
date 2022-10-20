module.exports = {
    port: 3000,
    db: {
      production: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/musika`,
      development: `mongodb://mongo:27017/${process.env.MONGO_DB}`,
      test: `mongodb://test-mongo:27017/${process.env.MONGO_DB}`,
    }
};