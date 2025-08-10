import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="grey background" className="card-image" style={{maxHeight: "12rem"}}/>
      <div className="card-content my-2">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
      <div className="card-actions d-flex justify-content-center pb-3">
        <button className="btn btn-primary">{props.button}</button>
      </div>
    </div>
  );
}

export default Card;