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

export const QUERY_CHAPTERS = gql`
  query getChapters($url: String!) {
    chapter(url: $url) {
      uri
      id
    }
  }
`;
