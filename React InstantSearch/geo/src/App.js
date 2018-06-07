import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_geo"
      >
        <main className="search-container">
          <div className="left-panel">
            <div id="hits">Hits</div>
          </div>
          <div className="right-panel">
            <div id="searchbox">SearchBox</div>
            <div id="stats">Stats</div>
            <div id="map">Maps</div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
