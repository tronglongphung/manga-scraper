import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const QUERY_MANGA = gql`
  query FindManga($name: String!) {
    manga(name: $name) {
      name
      alternative
      authors
      status
      genres
      updated
      rating {
        ratingFromFive
        votes
      }
      description
      url
      chapters {
        chapter
      }
    }
  }
`;
