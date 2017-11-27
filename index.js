"use strict";
require("dotenv").config();
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
const Path = require('path');
const Hapi = require("hapi");
const Inert = require('inert');

const podcastRSS = require('./lib/handlers/podcastRss');
const { favicon } = require('./lib/plugins/')

const server = new Hapi.Server({
  port: process.env.PORT || 8888,
  routes: {
    files: {
        relativeTo: Path.join(__dirname, 'static')
    }
  },
  plugins: {
    favicon
  },
});

const provision = async () => {
  // Add the route
  await server.register(Inert)

  server.route({
    method: 'GET',
    path: '/',
    options: {
      handler: async (request, h) => {
        return 'Welcome to Sanity Podcast Server.'
      }
    }
    });

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
        file: 'favicon.ico'
        }
    });

  server.route({
    method: 'GET',
    path: '/{projectId}/{dataset}/{slug}/rss',
    options: {
      handler: async (request, h) => podcastRSS(request, h)
    }
  })


  // Start the server
  try {
   await server.start().then(() => console.log('Server running:', server.info));
  }
  catch (err) {
    console.log(err);
  }
}
provision();
