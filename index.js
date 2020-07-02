const { api, PORT } = require('./api');

// eslint-disable-next-line no-console
api.listen(PORT, () => console.log((`Listening on ${PORT}`)));
