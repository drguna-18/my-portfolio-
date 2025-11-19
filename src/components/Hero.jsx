import "./Hero.css";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hello, I'm <span className="hero-name">GUNASEELAN</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            Brief description about yourself and what you do. This should be
            engaging and give visitors a quick overview of your expertise and
            passion.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToAbout}>
              Learn More About Me
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="hero-image-placeholder">
            <div className="hero-image-icon"></div>
            
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
