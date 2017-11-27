# Sanity Podcast Server

<img align="right" width="100" height="100" alt="Sanity Podcast Server Logo" src="https://github.com/kmelve/sanity-podcast-server/blob/master/static/sanity-podcast-logo.png?raw=true">

This is a simple server for the [sanity podcast plugin](https://www.npmjs.com/package/sanity-plugin-podcast) built on node and Hapi. It's ready to deployed on Heroku, but can run on any platform that runs node.

If you don't want to run it yourself you can use our free service by adding [https:// www.sanitypodcastfeed.com](https://www.sanitypodcastfeed.com) to your [CORS-setting]() and getting your feeds by accessing the url:

`https://www.sanitypodcastfeed.com/<projectid>/<dataset>/<podcastslug>/rss`

## Usage

`npm start` to start the server.

## Installation

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You can use the button to deploy a new server on Heroku. It only needs the Sanity project Id and dataset it should draw the podcasts from.

If your choose to run this server in another enivornment you can freely do so, but remember to add the enviroments key. You can either export them to the runtime or use a local .env file.

## Development

`npm run dev` runs the server locally with [nodemon](https://nodemon.io/). Remember to make a .env file with the keys set in the .env-example. These keys aren't really sensitive, but may be handy if you want to use different datasets for different environments.


