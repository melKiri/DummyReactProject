import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../css/ArtistsHome.css";
import AddArtistBtn from "./AddArtistBtn";
import ArtistItem from "./ArtistItem";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

function ArtistsHome() {
  const [myData, setMyData] = useState([]);
  const [itemData, setItemData] = useState({});
  const [show, setShow] = useState(false);
  const [newData, setnewData] = useState([]);
  const [hasErr,sethasErr]=useState(false);
  const [errMSG,seterrMSG]=useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    axios
      .get(`http://localhost:4000/api/view-artist-by-id/${id}`)
      .then((res) => {
        setItemData(res.data);
      });
  };
  const handleDelete = (id) => {

    axios
      .delete(`http://localhost:4000/api/delete-artist-by-id/${id}`)
      .then((response) => {});
    axios.get("http://localhost:4000/api/view-artists").then((res) => {
      setnewData(res.data);
    });
    setShow(false);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/all")
    .then((res) => {
      setMyData(res.data);
    })
    .catch(function (error) {
      sethasErr(true);
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        seterrMSG(error.message)
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.message);
        seterrMSG(error.message)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        seterrMSG(error.message)
      }
  
    })
  
  }, [newData]);
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


      {/* listing section */}
      <div className="listSection">
          {hasErr?
          <div className="listingWrap err">
          <h5 >Error:{errMSG}</h5>
          <h6 >Error Establishing a Database Connection</h6>
          </div>
          :
          <div className="listingWrap">
          {myData.map((item, id) => {
            return (
              <ArtistItem
                {...item}
                key={item._id}
                onClick={() => handleShow(item._id)}
              />
            );
          })}
          <nav>
            <Link to="/add"><AddArtistBtn /></Link>
          </nav>
          
        </div>}
      </div>

      {/* description Modal */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <div className="logored">logo</div>
            <div className="modal-title-name">FAMOUS ARTISTS</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-artist-name">
            {itemData.firstName} {itemData.lastName}
          </div>
          <div className="modal-more-wrap">
            <div className="modal-artist-pic">
              <div>
                <img src={itemData.coverImage} alt="" />
              </div>
              <p>{itemData.coverTitle}</p>
            </div>
            <div className="modal-artist-more">
              <h6>
                Date of birth <span> {itemData.DateOfBirth}</span>
              </h6>
              <h6>
                Date of death <span> {itemData.DateOfDeath}</span>
              </h6>

              <p>{itemData.Description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(itemData._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArtistsHome;
