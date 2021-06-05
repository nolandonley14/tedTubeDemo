import React, {useState} from 'react';
import '../Styles/Popup.css';
import {
  Highlight
} from 'react-instantsearch-dom';
import YoutubeClient from '../Clients/Youtube.js';
import VideoPlayer from './VideoPlayer.js';

const Popup = ({showPopup, setShowPopup, info}) => {

  const [videoID, setVideoID] = useState("")

  const openPopup = () => {
    setShowPopup(prev => !prev);
    console.log(videoID);
  };

  const searchVid = async keyword => {
    const response = await YoutubeClient.get("/search", {
      params: {
        q: keyword
      }
    });

    setVideoID(response.data.items[0].id.videoId)
  }

  const showHideClassName = showPopup ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {videoID === "" ? <img src={info.image_url} align="left" alt={info.name} /> : null}
        {videoID === "" ? null : <VideoPlayer videoID={videoID} />}
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
                {info.tags.slice(0,5).map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
          </ul>
          <div className="buttonContainer">
            <button className="watchBtn" type="button" onClick={() => searchVid(info.name)}>
              Watch
            </button>
            <button className="closeBtn" type="button" onClick={() => setShowPopup(prev => !prev)}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Popup;
