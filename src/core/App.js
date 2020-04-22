import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ChapterListQuery from '../chapters/ChapterListQuery';
import JQListQuery from '../chapters/JQListQuery';
import chapterResolvers from '../chapters/resolvers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import { Home } from './Home';
import BatmanEpisodes from '../chapters/Btas/BatmanEpisodes';
import { BtasSection } from '../chapters/Btas/BtasSection';
import JQEpisodes from '../chapters/JQ/JQEpisodes';
import { JQSection } from '../chapters/JQ/JQSection';
import TopBtas from '../chapters/Btas/TopBtas';
import TopNba from '../chapters/JQ/TopNba';
import About from './About';

const client = new ApolloClient({
  clientState: chapterResolvers,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/btas/rater" component={ChapterListQuery} />
                <Route exact path="/btas/section" component={BtasSection} />
                <Route exact path="/btas/episodes" component={BatmanEpisodes} />
                <Route exact path="/btas/top" component={TopBtas} />
                <Route exact path="/nba/rater" component={JQListQuery} />
                <Route exact path="/nba/section" component={JQSection} />
                <Route exact path="/nba/episodes" component={JQEpisodes} />
                <Route exact path="/nba/top" component={TopNba} />
              </Switch>
            </div>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
