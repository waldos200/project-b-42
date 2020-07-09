const NODE_ENV = process.env.NODE_ENV || 'STAGING';

const config = {
  PRODUCTION: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegrab42-vdmib.mongodb.net/test?authSource=admin&replicaSet=CintaNegraB42-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
  STAGING: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegrab42-vdmib.mongodb.net/test?authSource=admin&replicaSet=CintaNegraB42-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
  TEST: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegrab42-vdmib.mongodb.net/test?authSource=admin&replicaSet=CintaNegraB42-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
  },
};
// eslint-disable-next-line no-console
console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
