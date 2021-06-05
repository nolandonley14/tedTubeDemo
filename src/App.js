import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Filters from './Components/Filters.js';

const searchClient = algoliasearch(
  '400W842MTR',
  '0c5a876f20a08700f8382eeda6cdbd6f'
);

class App extends Component {

  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="nolandonley_demo" searchClient={searchClient}>
          <Header />
          <Filters/>
          <Body />
        </InstantSearch>

      </div>
    );
  }
}

export default App;
