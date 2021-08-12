import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        savedManga
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

export const ADD_TO_FAVOURITES = gql`
  mutation findManga($id: ID!) {
    addFavourite(id: $id) {
      savedManga {
        _id
      }
    }
  }
`;

export const REMOVE_FROM_FAVOURITES = gql`
  mutation removeManga($id: ID!) {
    removeFavourite(id: $id) {
      savedManga {
        _id
      }
    }
  }
`;
