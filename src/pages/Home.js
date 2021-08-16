import React from 'react';
import MediaCard from '../components/Card';
import Loading from '../components/Loading';
import { useStoreContext } from '../state/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ALL } from '../api/queries';
// import { PRELOAD_MANGA } from '../state/actionTypes';

const Home = () => {
  const [state] = useStoreContext();

  // const { data, loading } = useQuery(QUERY_USER);

  const { data: queryAll, loading: queryLoading } = useQuery(QUERY_ALL);
  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   console.log(data);
  //   console.log(data.user.savedManga);
  //   dispatch({ type: PRELOAD_MANGA, id: data.user.savedManga });
  // }, [data, dispatch, loading]);

  const isLoading = () => queryLoading || state.loadingManga;

  if (isLoading()) {
    console.log('loading - home');
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
            <h1 className="text-3xl font-bold text-gray-900">Home</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap px-4 py-6 sm:px-0">
            <Loading />
          </div>
        </div>
      </>
    );
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
              queryAll.allLocalMangas.map((manga) => (
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
