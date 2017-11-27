const RSS = require('rss');
const sanityClient = require("@sanity/client");

const { podcastFeed } = require('../queries')

module.exports = async ({ params: {projectId = '', dataset = '', slug = ''} = {}}, h) => {
  const client = sanityClient({
    projectId: projectId || process.env.PROJECT_ID,
    dataset: dataset || process.env.DATASET || "production",
    useCdn: true // `false` if you want to ensure fresh data
  });

  const query = podcastFeed;
  const data = await client.fetch(query, { slug }).catch(err => console.error(err))
  console.log(data)
  const {
    title = '',
    description = '',
    copyright = '',
    language = '',
    itunesSubtitle = '',
    itunesAuthor = '',
    itunesSummary = '',
    itunesOwner: {
      itunesName = '',
      itunesEmail = ''
    } = {},
    itunesImage = '',
    itunesCategories: {
      primary = '',
      secondary = false,
      tertiary = false,
    } = {},
    episodes = []
  } = data;
  const xmlFeed = new RSS({
    title,
    description,
    feed_url: 'http://example.com/rss.xml',
    site_url: 'http://example.com',
    image_url: 'http://example.com/icon.png',
    docs: 'http://example.com/rss/docs.html',
    copyright,
    language,
    categories: [primary, (secondary && secondary), (tertiary && tertiary)],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {'itunes:subtitle': itunesSubtitle},
      {'itunes:author': itunesAuthor},
      {'itunes:summary': itunesSummary},
      {'itunes:owner': [
        {'itunes:name': itunesName},
        {'itunes:email': itunesEmail}
      ]},
      {'itunes:image': {
        _attr: {
          href: itunesImage
        }
      }},
      {'itunes:category': [
        {_attr: {
          text: primary
        }},
        (secondary && {
          'itunes:category': [
            {_attr: {
              text: secondary
            }}
          ]
        }),
        (tertiary && {
          'itunes:category': [
            { _attr: {
              text: tertiary
            }}
          ]
        }),
      ]}
    ]
});
episodes.forEach(({
  title,
  description,
  pubDate,
  itunesImageHref
}) => {
  xmlFeed.item({
    title,
    description,
    pubDate,

    custom_elements: [
      {'itunes:episodeType': itunesSubtitle},
      {'itunes:duration': itunesSubtitle},
      {'itunes:explicit': itunesSubtitle},
      {'itunes:image': [
        {
          _attr: {
            href: itunesImageHref
          }
        }
      ]},
      {'itunes:subtitle': description},
    ]
  })
})
const response = h.response(xmlFeed.xml())
response.type('application/xml');
return response;
}
