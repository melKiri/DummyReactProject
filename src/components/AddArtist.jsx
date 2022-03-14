import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
// import axios from "axios";

function AddArtist() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

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

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const dobRef = useRef();
  const dodRef = useRef();
  const linkRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

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

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              <Form.Control.Feedback type="invalid">
                Please provide a First Name.
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastnameRef} required={true} />
              <Form.Control.Feedback type="invalid">
                Please provide a Last Name.
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="mb-6">
            <Form.Label>Artwork Link</Form.Label>
            <Form.Control
              type="text"
              ref={linkRef}
              placeholder="/images/{firstName}.png"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a path.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-6">
            <Form.Label>Artwork Title</Form.Label>
            <Form.Control type="text" ref={titleRef} required
            placeholder="{Artist}.  {Artwork Title}.  {date}.  {Origin/Credit Line/Copyright}" />
            <Form.Control.Feedback type="invalid">
              Please provide a Artwork Title.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <div>
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
             
                type="text"
                ref={dobRef}
                maxLength="4"
                required
                placeholder="e.g. 1823"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a Date Of Birth.
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label>Date Of Death</Form.Label>
              <Form.Control type="text" 
              ref={dodRef} maxLength="4" required
              placeholder="e.g. 1994" />
              <Form.Control.Feedback type="invalid">
                Please provide a Date Of Death or "-" .
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group className="mb-6">
            <Form.Label>Artist Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              ref={descriptionRef}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Artist Description .
            </Form.Control.Feedback>
          </Form.Group>
          <div className="btn-group">
            <Button variant="danger" type="submit">
              Submit
            </Button>

            <nav>
              <Link to="/">
                <Button variant="dark" type="submit">
                  close
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
