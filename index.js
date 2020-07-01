const { api, PORT } = require('./api');

// eslint-disable-next-line linebreak-style
api.listen(PORT, () => console.log((`Listening on ${PORT}`)));
