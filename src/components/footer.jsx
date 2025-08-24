import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address */}
        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <span>1er etage, 36 Chemin Sidi Yahia, Lot 4, Hydra 16035</span>
        </div>

        {/* Center text */}
        <div className="footer-center">
          <p>Copyright © 2025 Conseil en info | Dev & QA |</p>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span>0556 36 72 62</span>
          </div>
          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>contact@datainuition.net</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
