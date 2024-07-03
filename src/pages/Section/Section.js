import React from 'react';
import './Section.css';

const Section = ({ image, title, linkText, isVideo, isCentered, className }) => {
  return (
    <div className={`section ${className} ${isCentered ? 'centered' : ''}`}>
      {isVideo ? (
        <video src={image} alt={title} className="section-media" autoPlay loop muted />
      ) : (
        <img src={image} alt={title} className="section-media" />
      )}
      <h2 className="section-title">{title}</h2>
      {linkText && <button className="section-button">{linkText}</button>}
    </div>
  );
};

export default Section;
