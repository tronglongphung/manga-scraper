import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      name
      savedManga
      email
    }
  }
`;

export const QUERY_MANGAS = gql`
  query getMangas($url: String!) {
    mangaData(url: $url) {
      name
      chapters {
        chapter
      }
      url
    }
  }
`;

export const QUERY_MANGA_DATA = gql`
  query getMangaData($url: String!) {
    mangaData(url: $url) {
      name
      status
    }
  }
`;

export const QUERY_MANGA_DETAILS = gql`
  query getMangaData($key: String!) {
    manga(key: $key) {
      name
      alternative
      authors
      status
      genres
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

export const QUERY_CHAPTERS = gql`
  query getChapters($url: String!) {
    chapter(url: $url) {
      uri
      id
    }
  }
`;
