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
    },
    "episodes": *[references(^._id) && _type == "episode"]{
      title,
      "pubDate": schedule.publish.local,
      "author": "",
      "enclosureUrl": file.asset->url,
      "enclosureLength": file.asset->size,
      "enclosureType": file.asset->mimeType,
      "itunesEpisodeType": itunes.type,
      "itunesAuthor": "",
      "itunesSubtitle": "",
      "itunesDuration": "",
      "itunesExplicit": "",
      "itunesImageHref": coverArt.asset->url,
      description,
      "content": "",
      "itunesSummary": description
    }
  }`

/**
 * <title>Episode 37: A Crack in the Facade</title>
<link>https://smalldifferences.fireside.fm/37</link>
<guid isPermaLink="false">b5f441c5-5629-473d-9ca0-71597435f617</guid>
<pubDate>Mon, 20 Nov 2017 18:15:00 +0100</pubDate>
<author>Knut Melvær & Chris Atherton</author>
<enclosure url="https://aphid.fireside.fm/d/1437767933/995064da-d29f-4f8d-a934-7f187a288f82/b5f441c5-5629-473d-9ca0-71597435f617.mp3" length="36134581" type="audio/mpeg"/>
<itunes:episodeType>full</itunes:episodeType>
<itunes:author>Knut Melvær & Chris Atherton</itunes:author>
<itunes:subtitle>
A slightly-the-worse-for-wear Knut and Chris record from Webdagene 2017. Discussed this week are retro sexism, cultural appropriation, and whether Norway is less ‘woke’ than expected. Knut’s Gruberesque pauses are left in, mostly just to troll listener Even.
</itunes:subtitle>
<itunes:duration>49:11</itunes:duration>
<itunes:explicit>no</itunes:explicit>
<itunes:image href="https://images.fireside.fm/podcasts/images/9/995064da-d29f-4f8d-a934-7f187a288f82/episodes/b/b5f441c5-5629-473d-9ca0-71597435f617/cover.jpg"/>
<description>
A slightly-the-worse-for-wear Knut and Chris record from Webdagene 2017. Discussed this week are retro sexism, cultural appropriation, and whether Norway is less ‘woke’ than expected. Knut’s Gruberesque pauses are left in, mostly just to troll listener Even.
</description>
<content:encoded>...</content:encoded>
<itunes:summary>...</itunes:summary>
 */

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
