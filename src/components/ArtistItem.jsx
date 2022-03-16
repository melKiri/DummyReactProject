import React from "react";
// import ArtistCoverImg from '/images/ray.png'

function ArtistItem(props) {
  return (
    <>
      <div className="ArtistItemWrap" onClick={props.onClick} >
        <img className="ArtistCoverImg" src={props.coverImage} alt="#" />
        <div className="ArtistName">
          <p className="firstName"> {props.firstName}</p>
          <p className="lastName">{props.lastName}</p>
        </div>
      </div>
    </>
  );
}

export default ArtistItem;
