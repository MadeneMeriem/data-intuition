import React from "react";

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  background, 
  button1Text, 
  button2Text 
}) => {
  return ( 
    <div className="hero-section">
      {background && (
        <img src={background} alt="Landing Background" className="landing-bg" />
      )}

      {title && <h1>{title}</h1>}

      {subtitle && <h2>{subtitle}</h2>}

      {description && <p className="description">{description}</p>}

      {(button1Text || button2Text) && (
        <div className="actions">
          {button1Text && <button className="action-contact">{button1Text}</button>}
          {button2Text && <button className="action-appelez">{button2Text}</button>}
        </div>
      )}
    </div>
  );
};

export default Hero;
