import React, { useState } from 'react';
import {
  Hits,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import '../Styles/Body.css';
import Popup from './Popup.js';
import Moment from 'moment';
import YoutubeClient from '../Clients/Youtube.js';

export default function Body() {

  return (
        <div className="right-panel">
            <Hits hitComponent={Hit} />
            <Pagination />
        </div>
  );
}
function Hit(props) {

  Moment.locale('en');
  var d = Moment.unix(props.hit.date);

  const [showPopup, setShowPopup] = useState(false)

  const openPopup = () => {
    setShowPopup(prev => !prev);
  };

    return (
      <>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} info={props.hit}/>
      <div className="card" >
        <img src={props.hit.image_url} align="left" alt={props.hit.name} onClick={openPopup}/>
        <div className="hit-name">
          <Highlight attribute="name" hit={props.hit} />
        </div>
        <div className="hit-speakers">
          <Highlight attribute="speakers" hit={props.hit} />
          <div>{d.format('MMMM YYYY')}</div>
        </div>
      </div>
    </>
    );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
