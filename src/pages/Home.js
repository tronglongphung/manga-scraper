import React, { useState } from 'react';
import MediaCard from '../components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_MANGAS, QUERY_SEARCH_MANGA } from '../api/queries';

const Home = () => {
  // const [link] = useState('https://readmanganato.com/manga-eh951664/');
  // const { loading, data } = useQuery(QUERY_MANGAS, { variables: { url: link } });
  const { loading, data } = useQuery(QUERY_SEARCH_MANGA, { variables: { name: 'one piece' } });

  if (loading) {
    return 'loading';
  }
  console.log(data);
  // should use useEffect around here
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex px-4 py-6 sm:px-0">
            {/* should add name, latest chapter, cover img */}
            {/* <MediaCard
              // name={data.mangaData.name}
              // url={data.mangaData.url}
              // latest={data.mangaData.chapters[0].chapter}
              // cover={data.mangaData.coverImg}
              name={data.mangas.name}
              url={data.mangas.url}
              // latest={data.mangas.chapters[0].chapter}
              cover={data.mangas.coverImg}
            /> */}

            {data.mangas.map((manga) => (
              <MediaCard
                // name={data.mangaData.name}
                // url={data.mangaData.url}
                // latest={data.mangaData.chapters[0].chapter}
                // cover={data.mangaData.coverImg}
                name={manga.name}
                url={manga.url}
                latest={manga.chapters[0].chapter}
                // cover={manga.mangas.coverImg}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
