import React from 'react';
import {
  SearchBox
} from 'react-instantsearch-dom';
import '../Styles/Header.css';


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
