import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../css/ArtistsHome.css";
import AddArtistBtn from "./AddArtistBtn";
import ArtistItem from "./ArtistItem";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ArtistsHome() {
const [myData,setMyData]=useState([]);
 const [itemData,setItemData]=useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    console.log('when onclick get id=',id);
    setShow(true);
     axios.get(`http://localhost:4000/api/view-artist-by-id/${id}`).then((res) => {
      setItemData(res.data);
      console.log('my click data = ',res.data.firstName);
    });

  }


  useEffect(() => {
    axios.get("http://localhost:4000/api/view-artists").then((res) => {
      setMyData(res.data);
      console.log('listing data = ',res.data);
    });
  }, []);
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
          {myData.map((item, id) => {
            return <ArtistItem {...item} key={item._id} onClick={() => handleShow(item._id)}/>;
          })}
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
          <div className="modal-artist-name">{itemData.firstName}  {itemData.lastName}</div>
          <div className="modal-more-wrap">
            <div className="modal-artist-pic">
              <div>
                <img src={itemData.coverImage} alt="" />
              </div>
              <p>
              {itemData.coverTitle}
              </p>
            </div>
            <div className="modal-artist-more">
              <h6>
                Date of birth <span>  {itemData.DateOfBirth}</span>
              </h6>
              <h6>
                Date of death <span> {itemData.DateOfDeath}</span>
              </h6>
              <p>{itemData.description}</p>
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
