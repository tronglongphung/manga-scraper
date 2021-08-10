import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHAPTERS } from '../api/queries';

const Reader = () => {
  const [link] = useState('https://readmanganato.com/manga-eh951664/chapter-264');

  // move this to reader.js
  const { loading, data } = useQuery(QUERY_CHAPTERS, { variables: { url: link } });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap px-4 py-6 sm:px-0">
          <img src="https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" alt="loading" width="200px" height="200px" />
        </div>
      </div>
    );
  }
  // console.log(data);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Black Clover</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {data.chapter.map((panel) => {
            return <img src={`${process.env.REACT_APP_BASEURL}${panel.uri}`} alt={panel.id} key={panel.id}></img>;
          })}
        </div>
      </main>
    </>
  );
};

export default Reader;
