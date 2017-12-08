# Sanity Podcast Server

<img align="right" width="100" height="100" alt="Sanity Podcast Server Logo" src="https://github.com/kmelve/sanity-podcast-server/blob/master/static/sanity-podcast-logo.png?raw=true">

This is a simple server for the [sanity podcast plugin](https://www.npmjs.com/package/sanity-plugin-podcast) built on node and Hapi. It's ready to be deployed on Heroku, but can run on any platform that runs node.

If you don't want to host it yourself you can use our (for now) free service by adding [https:// www.sanitypodcastfeed.com](https://www.sanitypodcastfeed.com) to your [CORS-setting](https://manage.sanity.io/) and getting your feeds by accessing the url:

`https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`

## Usage

`npm start` to start the server.

## Installation

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You can use the button to deploy a new server on Heroku. It only needs the Sanity project Id and dataset it should draw the podcasts from.

If your choose to run this server in another enivornment you can freely do so, but remember to add the enviroments key. You can either export them to the runtime or use a local .env file.

## Development

`npm run dev` runs the server locally with [nodemon](https://nodemon.io/).

`npm run inspect` runs the server with the inspect flag. I recommend using it with [Node.js --inspector Manager](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj) for Chrome.

## Roadmap

- [ ] Informative frontpage
- [ ] Simple admin-page with authentication
- [ ] Google Analytics or other statistics-integration
