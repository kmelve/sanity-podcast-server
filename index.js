"use strict";
require("dotenv").config();

const Hapi = require("hapi");
const server = new Hapi.Server({
  port: process.env.PORT || 8888
});
const podcastRSS = require('./lib/handlers/podcastRss');
  // Add the route
  server.route({
    method: 'GET',
    path: '/podcast/{name}/rss',
    options: {
      handler: async (request, h) => podcastRSS(request, h)
    }
  })

  // Start the server
  try {
   server.start().then(() => console.log(`Server running at: ${server.info.uri}`));
  }
  catch (err) {
    console.log(err);
  }

