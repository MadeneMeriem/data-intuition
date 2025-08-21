const About = ({ title, description, image, alt }) => {
  return ( 
    <div className="about-section">
      <div className="text-section">
        <h3>{title}</h3>
        <div className="underline"></div>
        <p className="description-text">
          {description}
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt={alt} className="about-image" />
      </div>
    </div>
  );
};
 
export default About;
