import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch/dom';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">saas</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>

        <div className="container">
          <InstantSearch
            appId="B1G2GM9NG0"
            apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
            indexName="demo_saas"
          >
            <div className="container-app">
              <div className="filters">
              </div>

              <div className="search-container">
                <SearchBox className="searchBox" placeholder="" />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
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
