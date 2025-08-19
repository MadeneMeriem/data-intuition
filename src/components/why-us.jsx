import Why_us from '../assets/whyus.png';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from 'react';




const Whyus = () => {
    const why_us_details = [
        "Nous vendons ce que nous livrons.",
        "Livraison de solutions complètes et durables aux clients.",
        "Respect des délais et des budgets.",
        "Consultants de niveau expert."
    ]
    return ( 
        <div className="why-us">
            <img src={Why_us} alt="Pourquoi Nous Choisir ?" className="why-us-image"/>
            <div className="why-us-text">
           <div className="text-section-1">
            <h3>Pourquoi Nous Choisir ?</h3>
           <div className="underline"></div>
            <p className="title">
                Nous Sommes des <span>Experts</span> en <span>Data Intuition</span>
            </p>
            <p className="description-text">
                Nous sommes une entreprise fondée et dirigée par une équipe d’experts en technologies de l’information possédant une vaste expérience dans ce domaine. Nous avons relevé les défis stratégiques et tactiques auxquels sont confrontées diverses organisations commerciales à travers le monde.
            </p>
           </div>
           <div className="text-section-2">
            <p className="description-text">
                Nos processus métier et nos services IT offrent des bénéfices mesurables à nos clients grâce à un plan d’affaires simple, basé sur des engagements fermes : 
            </p>
            <ul className="why-us-list">
                {why_us_details.map((item, index) => (
                    <li key={index} className="why-us-item">
                        <CheckCircleIcon className="check-icon" />
                        <span className='item'>{item}</span>
                    </li>
                ))}
            </ul>   
           </div>
            </div>
        </div>
     );
}
 
export default Whyus;