import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav/';
import Saved from './pages/Saved';
import { StoreProvider } from './state/GlobalState';
import Profile from './pages/Profile';
import Reader from './pages/Reader';
import MangaDetails from './pages/MangaDetails';

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
              <Route exact path="/manga/:key" children={<MangaDetails />} />

              {/* <Route path="/manga/:mangaKey/:mangaChapterKey" component={Reader} /> */}

              {/* remove route reader soon */}
              <Route exact path="/reader" component={Reader} />

              <Route exact path="/saved" component={Saved} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
