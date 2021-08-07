import React, { useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MANGA_DETAILS } from '../api/queries';

export default function MangaDetails() {
  let { key } = useParams();
  const { loading, data } = useQuery(QUERY_MANGA_DETAILS, { variables: { key: `${key}` } });

  if (loading) {
    return 'loading';
  }
  //   console.log(data.manga);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{data.manga.name}</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {data.manga.chapters.map((chapter) => {
          return <p key={chapter.chapter}>{chapter.chapter}</p>;
        })}
      </div>
    </>
  );
}
//   name
//   alternative
//   authors
//   genres
//   updated
//   url
//   chapters { (do a map)
//     chapter
//     url
//      }
