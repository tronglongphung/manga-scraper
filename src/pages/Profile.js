import React from 'react';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {data.user.name}</p>
      <p>Email: {data.user.email}</p>
      <p>Favorite Manga: {data.user.savedManga.join(', ')}</p>
    </div>
  );
};

export default Profile;
