import './About.css';

const About = () => {

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-text slide-in-left">
            <p>
              I am an aspiring Computer Science Engineer and web Developer with hands-on experience in React.js, JavaScript, HTML, and CSS.
              I have developed responsive, user-friendly, and scalable web applications through academic projects and internships. Passionate about 
              creating innovative and efficient software solutions with clean UI design and optimized performance. Strong in problem-solving, teamwork, 
              and adapting to new technologies. Seeking an entry-level Frontend Developer role to apply my creativity, technical skills, and enthusiasm 
              for modern web development.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">Fresher</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => window.open('/GunaseelanD.pdf', '_blank')}>
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
