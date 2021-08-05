import React, { useState } from 'react';
import MediaCard from '../components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_CHAPTERS } from '../api/queries';

const Home = () => {
  // const [mangaPanels, setMangaPanels] = useState([]);
  const [link, _setLink] = useState('https://readmanganato.com/manga-eh951664/chapter-264');

  const { loading, data } = useQuery(QUERY_CHAPTERS, { variables: { url: link } });

  if (loading) {
    return 'loading';
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <MediaCard />

            {data.chapter.map((panel) => {
              return <img src={`${process.env.REACT_APP_BASEURL}${panel.uri}`} alt={panel.id}></img>;
            })}
          </div>

          {/* /End replace */}
        </div>
      </main>
    </>
  );
};

export default Home;
