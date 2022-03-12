import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/ArtistsHome.css";

function artistsHome() {
  return (
    <>
      {/* ============<logo/>============= */}
     
      <div className="navListSection">
        <div className="logo">
            <div className="logored">Logo</div>
        </div>
      </div>

      {/* ============<Banner/>============= */}
      <div className="banner-bg">
        <p className="banner-word">
            FAMOUS <br/>
            ARTISTS
        </p>
        
      </div>

      {/* ============<search/>============= */}
      <div className="search-bg">
        <div className="search-section">
          <input
            type="text"
            className="search-term"
            id="search-term"
            // value={inputTerm}
            // onChange={onUpdateAfterChange}
            // onKeyPress={onKeyPressed}
            placeholder="Search"
          />

          <button className="search-btn">
            <FiSearch color="#707070" fontSize="17px" />
          </button>

        </div>
        <div className="hotTerm">
          <ul>
            <li>
              <a href="/">Bertrand Goldberg </a>
            </li>
            <li>
              <a href="/">Yoon Kwang-cho </a>
            </li>
            <li>
              <a href="/">Isolated Russia </a>
            </li>
            <li>
              <a href="/">Edvard Munch </a>
            </li>
            <li>
              <a href="/">Johannes Vermeer </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <NewsSearch key={inputTerm}/> */}
    </>
  );
}

export default artistsHome;
