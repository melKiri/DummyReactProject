import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import axios from "axios";

function AddArtist() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const dobRef = useRef();
  const dodRef = useRef();
  const linkRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    let formdata = {
      firstName: firstnameRef.current.value,
      lastName: lastnameRef.current.value,
      coverImage: linkRef.current.value,
      description: descriptionRef.current.value,
      coverTitle: titleRef.current.value,
      DateOfBirth: dobRef.current.value,
      DateOfDeath: dodRef.current.value,
    };
    console.log("formdata=", formdata);
  };
  return (
    <>
      {/* ============<logo section/>============= */}
      <div className="addlogoWrap">
        <div className="logored">logo</div>
        <div className="modal-title-name">ADD NEW ARTISTS</div>
      </div>

      {/* ============<form section/>============= */}
      <div className="banner-bg addSection">
        <h4>Add New Artists</h4>

        <Form>
          <Form.Group className="mb-3">
            <div>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                ref={firstnameRef}
                required={true}
                // value={fn}
                // onChange={(e) => setfn(e.target.value)}
              />
            </div>
            <div>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastnameRef} required={true} />
            </div>
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Artwork Link</Form.Label>
            <Form.Control type="text" ref={linkRef} />
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Artwork Title</Form.Label>
            <Form.Control type="text" ref={titleRef} />
          </Form.Group>
          <Form.Group className="mb-3">
            <div>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="text"
                ref={dobRef}
                // value={fn}
                // onChange={(e) => setfn(e.target.value)}
              />
            </div>
            <div>
              <Form.Label>Date Of Death</Form.Label>
              <Form.Control type="text" ref={dodRef} />
            </div>
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Artist Description</Form.Label>
            <Form.Control as="textarea" rows={7} ref={descriptionRef} />
          </Form.Group>
          <div className="btn-group">
            <Button variant="dark" type="submit" onClick={onSubmit}>
              Submit
            </Button>

            <nav>
              <Link to="/">
                <Button variant="dark" type="submit">
                  Cancel
                </Button>
              </Link>
            </nav>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddArtist;
