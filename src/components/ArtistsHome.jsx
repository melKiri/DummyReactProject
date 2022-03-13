import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../css/ArtistsHome.css";
import AddArtistBtn from "./AddArtistBtn";
import ArtistItem from "./ArtistItem";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtistCoverImg from "../images/ray.png";

function ArtistsHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* ============<logo section/>============= */}

      <div className="navListSection">
        <div className="logo">
          <div className="logored">Logo</div>
        </div>
      </div>

      {/* ============<Banner section/>============= */}
      <div className="banner-bg">
        <p className="banner-word">
          FAMOUS <br />
          ARTISTS
        </p>
      </div>

      {/* ============<search section/>============= */}
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
        {/* <div className="hotTerm">
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
        </div> */}
      </div>

      {/* listing section */}
      <div className="listSection">
        <div className="listingWrap">
          <ArtistItem onClick={handleShow} />
          <ArtistItem />
          <ArtistItem />
          <ArtistItem />
          <ArtistItem />
          <ArtistItem />
          <ArtistItem />
          <AddArtistBtn />
        </div>
      </div>

      {/* description Modal */}
    
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
          <Modal.Title id="example-custom-modal-styling-title">
            <div className="logored">logo</div>
            <div className="modal-title-name">FAMOUS ARTISTS</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-artist-name">RAY JOHNSON </div>
          <div className="modal-more-wrap">
            <div className="modal-artist-pic">
              <div>
                <img src={ArtistCoverImg} alt="" />
              </div>
              <p>
                Ray Johnson. Elvis Presley #1 (Oedipus), 1956-58. Promised gift
                of The William S. Wilson Collection of Ray Johnson.
              </p>
            </div>
            <div className="modal-artist-more">
              <h6>
                Date of birth <span> 1921</span>
              </h6>
              <h6>
                Date of death <span>1995</span>
              </h6>
              <p>
                Once described as New York’s “most famous unknown artist,” Ray
                Johnson was a renowned maker of meticulous collages and a
                pioneering figure in the worlds of Pop, Fluxus, Conceptual Art,
                and performance in the 1960s. From live events to exchanges via
                the postal service, Johnson treated social interactions as a
                type of artistic endeavor. He was the founder and impresario of
                the first international mail art network, the New York
                Correspondence School (NYCS), established in 1962. 
                <br/>
                After studying at Black Mountain College, an experimental institution
                in western North Carolina, from 1945 through 1948, Johnson
                settled in New York City. There, he established himself as a
                painter of geometric abstractions while also pursuing a career
                in graphic design. By the mid-1950s he had destroyed much of his
                early work and was producing a type of collage he called
                “moticos” (a nonsensical anagram of the word “osmotic”), which
                could be hung on the wall, mailed in envelopes, or featured in
                impromptu performances. As the collages evolved and began to
                incorporate images of celebrities, including Elvis Presley,
                James Dean, and Shirley Temple, Johnson found himself at the
                forefront of what would become known as Pop Art. Later, by
                organizing and choreographing the activities of the NYCS, he
                participated in the burgeoning Fluxus movement whose
                interdisciplinary activities blurred the boundaries between art
                and everyday life. For the remainder of his career until his
                death in 1995, 
                <br/>
                Johnson cultivated a position for himself that
                would be both inside and outside the art world: extraordinarily
                well-networked but critically savvy and always resistant to the
                structures and constraints of traditional art spaces. The Art
                Institute of Chicago, steward since 2018–19 of the William S.
                Wilson Collection of Ray Johnson—a vast trove of letters,
                artworks, and ephemera that was once the official archive of the
                NYCS—is home to one of the world’s most complete and diverse
                collections of Johnson’s art, with special strengths in early
                works from the 1950s to 1960s. This collection is the basis for
                one of the most exhaustive exhibitions dedicated to the artist,
                Ray Johnson ℅, opening at the Art Institute in 2021.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>Close</Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArtistsHome;
