import React from 'react';
import MediaCard from '../components/Card';
import Loading from '../components/Loading';
import { useStoreContext } from '../state/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ALL } from '../api/queries';

const Home = () => {
  const [state] = useStoreContext();
  const { data, loading } = useQuery(QUERY_ALL);

  const isLoading = () => loading || state.mangaLoading;

  if (isLoading()) {
    return <Loading />;
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap px-4 py-6 sm:px-0">
            {isLoading() ? (
              <Loading />
            ) : state.mangas.length > 0 ? (
              state.mangas.map((manga) => (
                <div key={manga._id}>
                  <MediaCard
                    id={manga._id}
                    cover={manga.coverImg}
                    name={manga.name}
                    url={manga.url}
                    latest={manga.chapters[0]?.chapter}
                  />
                </div>
              ))
            ) : (
              data.allLocalMangas.map((manga) => (
                <div key={manga.url}>
                  <MediaCard
                    id={manga._id}
                    cover={manga.coverImg}
                    name={manga.name}
                    url={manga.url}
                    latest={manga.chapters[0]?.chapter}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
