import { Phone, Mail, MapPin } from "lucide-react";
import facebook from '../assets/logos_linkedin.svg';
import linkedin from "../assets/logos_facebook.svg";
import map from "../assets/Google Maps Widget.png";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <div className="title">
          <h3>Contactez nous !</h3>
          <div className="underline"></div>
          <p className="description-text">
            Une question, un projet ou besoin d’aide ? Notre équipe est là pour vous répondre rapidement.
          </p>
        </div>

        <div className="contact-links">
          {/* Phone */}
          <div className="phone">
            <div className="phone-icon line-aligner">
              <Phone/>
              <h5>Téléphone</h5>
            </div>
            <p>0556 36 72 62</p>
          </div>

          {/* Email */}
          <div className="email">
            <div className="email-icon line-aligner">
              <Mail/>
              <h5>Email</h5>
            </div>
            <p>contact@dataintuition.net</p>
          </div>

          {/* Adresse */}
          <div className="adresse">
            <div className="adresse-icon line-aligner">
              <MapPin />
              <h5>Adresse</h5>
            </div>
            <p>1er étage, 36 Chemin Sidi Yahia, Lot 4, Hydra 16035</p>
          </div>
        </div>

        <div className="folow-us">
            <h4>Suivez-nous sur</h4>
            <div className="facebok">
                <img src={facebook} alt="fcbk icon" className="facebook-icon"/>
                <a href="https://www.facebook.com/dataintuitiondz?mibextid=ZbWKwL">Facebook</a>
            </div>
            <div className="linedin">
                <img src={linkedin} alt="linkedin icon" className="linkedin-icon" />
                <a href="https://www.linkedin.com/company/dz-data-intuition/">Linkedin</a>
            </div>
        </div>
      </div>
      <div className="map">
        <img src={map} alt="map image" />
      </div>
    </div>
  );
};

export default Contact;
