const podcastRSS = require('../handlers/podcastRss');
module.exports = {
    method: 'GET',
    path: '/rss',
    options: {
      handler: async (request, h) => podcastRSS(request, h)
    }
  };
