import React from 'react';
import '../Styles/Popup.css';
import algoliasearch from 'algoliasearch/lite';
import {
  Hits,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import { PieChart } from 'react-minimal-pie-chart';

const Popup = ({showPopup, setShowPopup, info}) => {
  console.log(info);
  const showHideClassName = showPopup ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img src={info.image_url} align="left" alt={info.name} />
        <div className="modal-content">
          <div className="modal-info">
            <div className="modal-info-left">
              <div className="modal-name">
                <Highlight attribute="name" hit={info} />
              </div>
              <div className="modal-stats">
                <Highlight attribute="speakers" hit={info} /> &#8226;&#xa0;
                <Highlight attribute="event_name" hit={info} /> &#8226;&#xa0;
                {info.viewed_count} views
              </div>
              <p className="modal-description">
                <Highlight attribute="description" hit={info} />
              </p>
            </div>
          </div>
          <ul className="modal-tag-list">
                {info.tags.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>
          <button className="closeBtn" type="button" onClick={() => setShowPopup(prev => !prev)}>
            Close
          </button>
        </div>
      </section>
    </div>
  )
};

export default Popup;
