import React from 'react';
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
  connectRefinementList
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import '../Styles/Header.css';
import Moment from 'moment';


export default function Header() {
  return (
          <div className="headerWithBar">
            <div className="logo">
              <img src="favicon.png" width="30px" height="30px" alt=""></img>
              <h2>TedTube</h2>
            </div>
            <SearchBox />
            <div/>
          </div>
  );
}
