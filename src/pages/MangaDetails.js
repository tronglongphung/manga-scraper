import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MANGA_DETAILS } from '../api/queries';
export default function MangaDetails() {
  let { key } = useParams();
  const location = useLocation();
  // console.log(location.state);
  const { loading, data } = useQuery(QUERY_MANGA_DETAILS, { variables: { key: `${key}` } });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap px-4 py-6 sm:px-0">
          <img src="https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" alt="loading" width="200px" height="200px" />
        </div>
      </div>
    );
  }
  //   console.log(data.manga);
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{data.manga.name}</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8 grid grid-cols-4 gap-4">
        <img src={location.state.coverImg} alt={data.manga.name} width="190px" />
        <div className="col-start-2 col-end-5  ">
          <div className="bg-white rounded-2xl p-2 sm:px-10 sm:py-8 shadow-md transition duration-500 justify-self-stretch">
            <div className="text-md sm:text-lg sm:mt-4 text-gray-800  ">
              Alternative names: {data.manga.alternative.join(', ')}
            </div>
            <div className="text-md sm:mt-4 text-gray-800  ">Authors: {data.manga.authors.join(', ')}</div>
            <div className="text-md sm:mt-4 text-gray-800  ">Genres: {data.manga.genres.join(', ')}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Chapters
                    </th>

                    <th
                      scope="col"
                      className=" px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Views
                    </th>
                    <th
                      scope="col"
                      className="invisible sm:visible px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {data.manga.chapters.map((chapter) => (
                    // add link to chapter here
                    <tr key={chapter.chapter}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <a href={chapter.url} target="_blank" rel="noreferrer">
                                {chapter.chapter}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-gray-800">
                          {chapter.views}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 invisible sm:visible  ">
                        {chapter.upload_date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
