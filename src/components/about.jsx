import AboutImage from '../assets/apropos.png'


const About = () => {
    return ( 
        <div className="about-section">
            <div className="text-section">
                <h3>A propos de Nous</h3>
                <div className="underline"></div>
                <p className="description-text">
                    Chez Data Intuition, nous sommes dédiés à transformer vos idées en solutions numériques innovantes. Fondée par une équipe d'experts en technologies de l'information, notre entreprise combine expertise, innovation et engagement pour offrir des services de qualité supérieure.
                </p>
            </div>
            <div className="image-section">
                <img src={AboutImage} alt="A propos de Nous" className="about-image" />
            </div>
        </div>
     );
}
 
export default About;