module.exports = `*[_type == 'podcast'][0]{
    title,
    "link": itunes.itunesUrl,
    language,
    copyright,
    "itunesSubtitle": subtitle,
    "itunesAuthor": itunes.author,
    "itunesSummary": itunes.summary,
    description,
    "itunesOwner": {
      "itunesName": itunes.owner.name,
      "itunesEmail": itunes.owner.email
    },
    "itunesType": itunes.type,
    "itunesImage": coverArt.asset->url,
    "slug": slug.current,
    "itunesCategories": {
      "primary": itunes.categories.firstCategory,
      "secondary": itunes.categories.secondCategory,
      "tertiary": itunes.categories.tertiaryCategory
    }
  }`
/*"items": *[references(^._id) && _type == "episode"]{
        "itunesEpisodeType": "",
        "itunesTitle": "",
        "itunesEpisode": ,
        "itunesSeason": ,
        "title": "",
        "itunesAuthor": "",
        "itunesSubtitle": "",
        "itunesSummary": "",
        "description": "",
        "itunesImage": {
            "href": ""
        },
        "content:encoded": "",
        "enclosure": {
            "length": "",
            "type": "",
            "url" ""
        }
        "guid": "",
        "pubDate":"" ,
        "itunesDuration": "",
        "itunesExplicit": "",*/
