import React from 'react';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap px-4 py-6 sm:px-0">
          <img src="https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" alt="loading" width="200px" height="200px" />
        </div>
      </div>
    );
  }
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <p>Name: {data.user.name}</p>
            <p>Email: {data.user.email}</p>
            <p>Number of Favorited Mangas: {data.user.savedManga.length}</p>
            <p>Favorite Manga: {data.user.savedManga.map((manga) => manga.name)}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
