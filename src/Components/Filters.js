import React from 'react';
import {
  Highlight,
  Configure,
  connectRefinementList
} from 'react-instantsearch-dom';
import '../Styles/Filters.css';

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
