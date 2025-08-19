import MissionImage from '../assets/mission.png';


const Mission = () => {
    return ( <div className="mission-section">
        <div className="mission-image">
            <img src={MissionImage} alt="Mission" className="mission-image" />
        </div>
        <div className="text-section">
           <div className="title">
             <h3>Notre Mission</h3>
            <div className="underline"></div>
           </div>
            <p className="description-text">
                Notre mission est de fournir des solutions IT qui propulsent la croissance et l’efficacité de nos clients.
                Nous visons à devenir votre partenaire de confiance en développant des stratégies sur mesure qui répondent aux besoins spécifiques de votre entreprise.
            </p>
        </div>
    </div> );
}
 
export default Mission;