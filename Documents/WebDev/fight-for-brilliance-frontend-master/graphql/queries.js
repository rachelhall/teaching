import gql from "graphql-tag";

export const POSTCAST_BY_SLUG = gql`
  query PodcastBySlug($slug: String!) {
    podcastBy(uri: $slug) {
      Podcast {
        title
        audioquotes {
          quotetext
          quotetimecode
        }
        episodenumber
        fieldGroupName
        guestname
        length
        links {
          linktitle
          linkurl {
            url
            target
          }
        }
        overviewcontent
        overviewtitle
        primaryimage {
          sourceUrl
        }
        sharedescription
        sharevideoportrait
        sharevideosquare
        tags {
          ... on Tag {
            id
            name
          }
        }
        podcasturl
        shortdescription
        facebookimage {
          sourceUrl
        }
        sharesquare {
          sourceUrl
        }
        shareportrait {
          sourceUrl
        }
      }
      id
      uri
      slug
      link
      date
      status
    }
  }
`;

export const PODCASTS_BY_TAG = gql`
  query PodcastByTag($tag: String!) {
    podcasts(first: 100, where: { tag: $tag, status: PUBLISH }) {
      edges {
        node {
          id
          slug
          Podcast {
            guestname
            shortdescription
            length
            primaryimage {
              sourceUrl
            }
            episodenumber
            tags {
              ... on Tag {
                id
                name
              }
            }
            title
          }
          date
        }
      }
    }
  }
`;

export const PODCAST_SHARE_INFO = gql`
  query PodcastBySlug($slug: String!) {
    podcastBy(uri: $slug) {
      Podcast {
        sharedescription
        sharesquare {
          sourceUrl
        }
        shareportrait {
          sourceUrl
        }
        sharevideoportrait
        sharevideosquare
        tags {
          ... on Tag {
            name
          }
        }
        title
      }
    }
  }
`;

export const GET_ALL_TAGS = gql`
  query GetTags {
    tags(where: { exclude: ["interviews", "kellerthinks"] }, first: 100) {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
  }
`;

export const GET_ALL_RESOURCES = gql`
  query {
    resources {
      edges {
        node {
          id
          Resource {
            tags {
              ... on Tag {
                id
                name
              }
            }
            category
            ctaLink
            ctaText
            ctaType
            description
            name
            image {
              sourceUrl(size: MEDIUM)
            }
            ctaFile {
              sourceUrl(size: MEDIUM)
            }
          }
        }
      }
    }
  }
`;
