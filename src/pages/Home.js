import React, { useState } from 'react';
import MediaCard from '../components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_MANGAS } from '../api/queries';

const Home = () => {
  const [link] = useState('https://readmanganato.com/manga-eh951664/');
  const { loading, data } = useQuery(QUERY_MANGAS, { variables: { url: link } });

  if (loading) {
    return 'loading';
  }
  console.log(data);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* should add name, latest chapter, cover img */}
            <MediaCard
              name={data.mangaData.name}
              url={data.mangaData.url}
              latest={data.mangaData.chapters[0].chapter}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
