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

const FirstRefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}) => (
  <ul className="tagsList">
    {items.map(item => (
      <li className="toggleItem" key={item.label}>
        <div className="toggleBack"
          style={{
            backgroundColor: item.isRefined ? 'white' : '#3c3d3c',
            color: item.isRefined ? 'black' : 'white',
           }}
           onClick={event => {
             event.preventDefault();
             refine(item.value);
           }}
        >
          {isFromSearch ? (
            <Highlight attribute="label" hit={item} />
          ) : (
            item.label
          )}
      </div>
      </li>
    ))}
  </ul>
);

const CustomRefinementList = connectRefinementList(FirstRefinementList);

export default function Filters() {
  return (
          <div className="left-panel">
            <CustomRefinementList attribute="tags" showMore showMoreLimit={15}/>
            <Configure hitsPerPage={8} />
          </div>
  );
}
