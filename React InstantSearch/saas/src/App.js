import React, { Component } from 'react';
import {
  InstantSearch,
  RefinementList,
  Panel,
  SearchBox,
} from 'react-instantsearch/dom';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_saas"
      >
        <main className="search-container">
          <div className="left-panel">
            <div id="type">
              <Panel header="Categories">
                <RefinementList attribute="type" />
              </Panel>
            </div>
          </div>
          <div className="right-panel">
            <div id="searchbox">
              <SearchBox translations={{ placeholder: 'Search in your CRM' }} />
            </div>
            <div id="stats">Stats</div>
            <div id="hits">Hits</div>
          </div>
        </main>
        <footer>
          Source Code on <a href="#">GitHub</a> - Powered by{' '}
          <a href="https://www.algolia.com">Algolia</a>
        </footer>
      </InstantSearch>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <code>{JSON.stringify(props.hit)}</code>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
