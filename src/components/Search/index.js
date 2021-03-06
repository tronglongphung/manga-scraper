import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { QUERY_SEARCH_MANGA } from '../../api/queries';
import { ADD_MANGA, LOADING_MANGA } from '../../state/actionTypes';
import { useStoreContext } from '../../state/GlobalState';

export default function SearchBox() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [, dispatch] = useStoreContext();

  const [searchManga, { loading, data }] = useLazyQuery(QUERY_SEARCH_MANGA);

  useEffect(() => {
    // console.log({ data });
    dispatch({ type: ADD_MANGA, data: data?.mangas });
    if (data?.mangas) {
      history.push('/');
    }
  }, [data, dispatch, history]);

  useEffect(() => {
    // console.log({ data });
    dispatch({ type: LOADING_MANGA, data: loading });
  }, [data, dispatch, loading]);

  const submitSearch = async (e) => {
    e.preventDefault();
    console.log('loading');
    await searchManga({ variables: { name: search } });
  };

  return (
    <div className=" mr-20 sm:mr-10 my-2 ">
      <form onSubmit={submitSearch}>
        <input
          value={search}
          type="search"
          className="shadow rounded border-0 p-2"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
