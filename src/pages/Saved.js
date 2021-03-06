import Auth from '../state/auth';
import { Link } from 'react-router-dom';
import MediaCard from '../components/Card';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../api/queries';

const memes = [
  'https://pbs.twimg.com/media/EROmBrLXUAEf8_c.jpg',
  'https://i.kym-cdn.com/photos/images/newsfeed/001/878/329/dfa.jpg',
  'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F028%2F692%2Fcat.jpg',
  'https://ih1.redbubble.net/image.1324616416.5649/flat,750x1000,075,f.jpg',
  'https://i.pinimg.com/originals/1f/1c/24/1f1c24b03ca966d1b3037fd3f167e4d6.jpg',
];
export default function Saved() {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap px-4 py-6 sm:px-0">
          <img src="https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" alt="loading" width="200px" height="200px" />
        </div>
      </div>
    );
  }

  const catMemes = () => {
    const catImg = Math.floor(Math.random() * memes.length);
    return <img src={memes[catImg]} width="300" height="200" alt="crying cat"></img>;
  };
  const notLoggedIn = () => (
    <>
      <img src="https://i.imgflip.com/4/3xc256.jpg" alt="bonk"></img>
      <div className="py-6 sm:px-0 font-semibold text-red-600">
        YOU NEED TO BE{' '}
        <Link to="/login" className="underline">
          LOGGED IN
        </Link>{' '}
        TO GET ACCESS
      </div>
    </>
  );
  const loggedIn = () => {
    return (
      <>
        {data.user.savedManga.length > 0 ? (
          <div className="flex flex-wrap px-4 py-6 sm:px-0">
            {data.user.savedManga.map((manga) => (
              <div key={manga._id}>
                <MediaCard
                  cover={manga.coverImg}
                  name={manga.name}
                  url={manga.url}
                  latest={manga.chapters[0]?.chapter}
                  id={manga._id}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            {catMemes()}
            <p className="pt-2">You have saved NOTHING</p>
          </>
        )}
      </>
    );
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Saved Manga</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{!Auth.loggedIn() ? notLoggedIn() : loggedIn()}</div>
      </main>
    </>
  );
}
