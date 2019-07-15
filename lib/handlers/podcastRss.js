const RSS = require('rss');
const sanityClient = require('@sanity/client');

const { podcastFeed } = require('../queries');

module.exports = async (request, h) => {
  const { params: { projectId = '', dataset = '', slug = '' } = {} } = request;

  const client = sanityClient({
    projectId: projectId || process.env.PROJECT_ID,
    dataset: dataset || process.env.DATASET || 'production',
    useCdn: true // `false` if you want to ensure fresh data
  });

  const query = podcastFeed;
  const data = await client
    .fetch(query, { slug })
    .catch(err => console.error(err));
  const {
    title = '',
    description = '',
    copyright = '',
    language = '',
    link = '',
    itunesSubtitle = '',
    itunesAuthor = '',
    itunesSummary = '',
    itunesOwner: { itunesName = '', itunesEmail = '' } = {},
    itunesImage = '',
    itunesCategories: {
      primary = '',
      secondary = false,
      tertiary = false
    } = {},
    episodes = []
  } = data;

  const feed = new RSS({
    generator: 'Sanity Podcast Server',
    title,
    description,
    site_url: link,
    image_url: itunesImage,
    copyright,
    language,
    categories: [primary, secondary && secondary, tertiary && tertiary],
    custom_namespaces: {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      { 'itunes:subtitle': itunesSubtitle },
      { 'itunes:author': itunesAuthor },
      { 'itunes:summary': itunesSummary },
      {
        'itunes:owner': [
          { 'itunes:name': itunesName },
          { 'itunes:email': itunesEmail }
        ]
      },
      {
        'itunes:image': {
          _attr: {
            href: itunesImage
          }
        }
      },
      {
        'itunes:category': [
          {
            _attr: {
              text: primary
            }
          },
          secondary
            ? {
                'itunes:category': [
                  {
                    _attr: {
                      text: secondary
                    }
                  }
                ]
              }
            : '',
          tertiary
            ? {
                'itunes:category': [
                  {
                    _attr: {
                      text: tertiary
                    }
                  }
                ]
              }
            : ''
        ]
      }
    ]
  });
  episodes.forEach(
    ({
      guid,
      title,
      description,
      pubDate,
      itunesImageHref,
      enclosureUrl,
      enclosureLength,
      itunesEpisodeType,
      itunesExplicit,
      duration,
      itunesSummary
    }) => {
      feed.item({
        title,
        guid,
        description,
        pubDate,
        custom_elements: [
          {
            enclosure: [
              {
                _attr: {
                  url: enclosureUrl,
                  length: enclosureLength,
                  type: itunesEpisodeType
                }
              }
            ]
          },
          { 'itunes:summary': itunesSummary },
          { 'itunes:episodeType': itunesEpisodeType },
          { 'itunes:duration': duration },
          { 'itunes:explicit': itunesExplicit ? 'yes' : 'no' },
          {
            'itunes:image': [
              {
                _attr: {
                  href: itunesImageHref
                }
              }
            ]
          }
        ]
      });
    }
  );
  const response = h.response(feed.xml());
  response.type('application/xml');
  return response;
};
