import React from "react";
// import ArtistCoverImg from '/images/ray.png'
import ArtistCoverImg from '../images/ray.png'

function ArtistItem(props) {
  return (
    <>
      <div className="ArtistItemWrap" onClick={props.onClick} >
        <img className="ArtistCoverImg" src={ArtistCoverImg} alt="#" />
        <div className="ArtistName">
          <p className="firstName"> RAY</p>
          <p className="lastName">JOHNSON</p>
        </div>
      </div>
    </>
  );
}

export default ArtistItem;
