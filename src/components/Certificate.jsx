import './Certificate.css'

const Certificates = () => {
  const certificates = [
    {
      title: "Python Full Stack Development,",
      issuer: "SLA - Softlogic technolegy",
      date: "2025",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS platform.",
      skills: ["Pthon","Django","React","Javascript","MYSQL"],
      credentialUrl: ""
    },
    {
      title: "Naan Mudhalvan - Skill build ,",
      issuer: "IBM",
      date: "2024",
      description: "Validates skills in designing, developing, and managing robust, secure, scalable cloud solutions.",
      skills: [""],
      credentialUrl: ""
    },
    {
      title: "Python",
      issuer: "Nativeva",
      date: "2023",
      description: "Advanced React certification covering hooks, context API, performance optimization, and testing.",
      skills: [""],
      credentialUrl: ""
    },
    {
      title: "Python Full Stack Development,",
      issuer: "BTREE",
      date: "2021",
      description: "Comprehensive certification covering frontend and backend development with modern technologies.",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "React"],
      credentialUrl: ""
    },
    {
      title: "Network Essential",
      issuer: "CISCO",
      date: "2025",
      description: "Validates technical knowledge with Docker and containerization concepts in enterprise environments.",
      skills: ["Docker", "Containerization", "CI/CD", "Orchestration"],
      credentialUrl: "https://www.docker.com/certification"
    },
    {
      title: " CODATHON - Python Full Stack Development",
      issuer: "SLA - Softlogic technolegy",
      date: "2025",
      description: "Certification demonstrating understanding of Scrum framework and agile project management.",
      skills: ["React","MYSQL", "Project Management"],
      credentialUrl: "https://www.scrumalliance.org/certifications"
    }
  ]

  // Split certificates into two columns
  const leftColumn = certificates.filter((_, index) => index % 2 === 0)
  const rightColumn = certificates.filter((_, index) => index % 2 === 1)

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title fade-in">Certifications</h2>
        <div className="certificates-grid">
          {/* Left Column */}
          <div className="certificates-column">
            {leftColumn.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card fade-in" 
                style={{animationDelay: `${0.2 + index * 0.2}s`}}
              >
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-issuer">{cert.issuer}</div>
                  <div className="certificate-date">{cert.date}</div>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <ul className="certificate-skills">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <div className="certificate-credential">
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credential-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="certificates-column">
            {rightColumn.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card fade-in" 
                style={{animationDelay: `${0.3 + index * 0.2}s`}}
              >
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-issuer">{cert.issuer}</div>
                  <div className="certificate-date">{cert.date}</div>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <ul className="certificate-skills">
                  {cert.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <div className="certificate-credential">
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="credential-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates