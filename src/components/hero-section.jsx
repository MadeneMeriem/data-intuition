import React from 'react';
import Landing from '../assets/landing-bg.png';
import Call from '../assets/call-us.svg';




const Hero = () => {
    return ( 
       <div className="hero-section">
            <img src={Landing} alt="Landing Background" className="landing-bg" />
            <h1>
                Data Intuition
            </h1>
            <h2>
                <span>Innovation</span> et <span>Expertise</span> pour un Monde Digital
            </h2>
            <p className="description">
                Nous vous accompagnons dans  transformation digitale en concevant des produits et services intelligents, performants et centrés sur l'utilisateur.
            </p>
            <div className="actions">
                <button className="action-contact">Contactez-nous</button>
                <button className="action-appelez">Appelez-nous</button>
            </div>
            <div className="call">
                <img src="" alt="" />
            </div>
            
       </div>
     );
}
 
export default Hero;