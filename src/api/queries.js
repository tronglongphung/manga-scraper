import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      name
      savedManga {
        _id
        name
        coverImg
        url
        chapters {
          chapter
          url
        }
      }
      email
    }
  }
`;

export const QUERY_ALL = gql`
  query getLocal {
    allLocalMangas {
      _id
      name
      coverImg
      url
      chapters {
        chapter
        url
      }
    }
  }
`;

// used in search
export const QUERY_SEARCH_MANGA = gql`
  query getMangaData($name: String!) {
    mangas(name: $name) {
      _id
      name
      coverImg
      url
      chapters {
        chapter
        url
      }
    }
  }
`;

// used in manga details
export const QUERY_MANGA_DETAILS = gql`
  query getMangaData($key: String!) {
    manga(key: $key) {
      _id
      name
      alternative
      authors
      status
      genres
      coverImg
      rating {
        ratingFromFive
        votes
      }
      updated
      description
      url
      chapters {
        chapter
        views
        upload_date
        url
      }
    }
  }
`;

// used in reader
export const QUERY_CHAPTERS = gql`
  query getChapters($url: String!) {
    chapter(url: $url) {
      uri
      id
    }
  }
`;
