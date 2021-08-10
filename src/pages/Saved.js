import Auth from '../state/auth';
import { Link } from 'react-router-dom';

export default function Saved() {
  const notLoggedIn = () => (
    <>
      <img src="https://i.imgflip.com/4/3xc256.jpg" alt="bonk"></img>
      <div className="py-6 sm:px-0 font-semibold">
        YOU NEED TO BE{' '}
        <Link to="/login" className="text-red-600 underline">
          LOGGED IN
        </Link>{' '}
        TO GET ACCESS
      </div>
    </>
  );

  const loggedIn = () => <div>Logged in</div>;

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Saved Manga</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto p-6 lg:px-8">{!Auth.loggedIn() ? notLoggedIn() : loggedIn()}</div>
      </main>
    </>
  );
}
