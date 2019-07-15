module.exports = `*[_type == 'podcast'][0]{
    title,
    "link": itunes.url,
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
    },
    "episodes": *[references(^._id) && _type == "episode"]{
      title,
      description,
      "guid": _id,
      "pubDate": schedule.publish.local,
      "enclosureUrl": file.asset->url,
      "enclosureLength": file.asset->size,
      "enclosureType": file.asset->mimeType,
      "itunesEpisodeType": itunes.type,
      "itunesDuration": duration,
      "itunesExplicit": explicit,
      "itunesImageHref": coverArt.asset->url,
      "itunesSummary": summary
    }
  }`
