import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import { StoreProvider } from './state/GlobalState';
import Nav from './components/Nav/';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Saved = lazy(() => import('./pages/Saved'));
const Profile = lazy(() => import('./pages/Profile'));
const Reader = lazy(() => import('./pages/Reader'));
const MangaDetails = lazy(() => import('./pages/MangaDetails'));

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASEURL + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />

              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/manga/:key" children={<MangaDetails />} />
                {/* <Route path="/manga/:mangaKey/:mangaChapterKey" component={Reader} /> */}

                {/* remove route reader soon */}
                <Route exact path="/reader" component={Reader} />
                <Route exact path="/saved" component={Saved} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
              </Suspense>

              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
