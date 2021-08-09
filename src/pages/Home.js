import React from 'react';
import MediaCard from '../components/Card';
import { useStoreContext } from '../state/GlobalState';

const Home = () => {
  const [state] = useStoreContext();

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
            {state.loadingManga && <div>Loading</div>}
            {state.mangas.length > 0 &&
              state.mangas.map((manga) => (
                <MediaCard
                  cover={manga.coverImg}
                  name={manga.name}
                  url={manga.url}
                  latest={manga.chapters[0].chapter}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
