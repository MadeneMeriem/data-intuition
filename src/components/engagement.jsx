import React from 'react';
import Expertise from '../assets/expertise.svg';
import Quality from '../assets/quality.svg';
import Ponct from '../assets/ponct.svg';


const Engagement = () => {
    const engCards = [
        {title : "Expertise", content : "Une équipe de consultants de niveau expert, prête à relever tous les défis.",picture: Expertise},
        {title:"Qualité", content : "Des solutions complètes et durables qui répondent à vos besoins.", picture: Quality},
        {title:"Ponctualité et Respect du Budget", content:"Livraison de projets dans les délais et selon le budget convenu.", picture: Ponct}
    ]


    return (
        <div className="engageme">
            <div className="engagement-section">
                <div className="title">
                    <h3>Nos Engagements</h3>
                    <div className="underline"></div>
                </div>
                <p className="description-text">
                    Chez Data Intuition, nous nous engageons à offrir des services exceptionnels qui favorisent le succès de nos clients.
                </p>
                <p className="bold-text">
                    Nos engagements reposent sur trois piliers essentiels :
                </p>
                <div className="engagement-cards">
                    {engCards.map((card, index) => (
                        <div className="engagement-card" key={index}>
                          <div className="line-aligner">
                            <img src={card.picture} alt={card.title} className="engagement-icon" />
                            <div className="horizline"></div>

                          </div>
                             <h4>{card.title}</h4>
                            <p className='card-text'>{card.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Engagement;