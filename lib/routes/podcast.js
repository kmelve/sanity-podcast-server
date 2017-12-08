const podcastRSS = require('../handlers/podcastRss');
module.exports = {
  method: 'GET',
  path: '/{projectId}/{dataset}/{slug}/rss',
  options: {
    handler: async (request, h) => podcastRSS(request, h)
  }
};
