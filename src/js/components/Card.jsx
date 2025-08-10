import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="grey background" className="card-image" style={{maxHeight: "12rem"}}/>
      <hr />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
      <hr className='mb-0'/>
      <div className="card-actions bg-light d-flex justify-content-center py-3">
        <button className="btn btn-primary">{props.button}</button>
      </div>
    </div>
  );
}

export default Card;