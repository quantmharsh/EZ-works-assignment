import React from 'react';
import './Card.css'; 

const Card = ({title ,content ,imageSrc}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}.</p>
      <div className="card-image">
        <img src={imageSrc} alt="Card Image" />
      </div>
    </div>
    
    
  );
};

export default Card;
