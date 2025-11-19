import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Entrepreneur Hub",
      description: "Developed a single-window React-based platform that helps entrepreneurs obtain approvals from multiple government agencies efficiently.",
      technologies: ["React", "Express.js", "Firebase", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/drguna-18/full-project.git",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.rLfQFPBKmNpkIGlUIsG0YwHaFe?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Tri Shop", 
      description: "Implemented a multi-search system allowing users to find products using text, image, and voice inputs, improving accessibility and convenience.",
      technologies: ["React", "Python", "MYSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/suryaprakash934555-cyber/integrating-image-and-voice-based-search-frontend.git", 
      imageUrl: "src/assets/Generated Image November 09, 2025 - 5_27PM.png"
    },
    {
      title: "Food Fest",
      description: "A comprehensive food delivery platform with real-time order tracking, restaurant management, and personalized recommendations for users.",
      technologies: ["HTML", "CSS3", "JS", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/drguna-18/Food-Fest.git",
      imageUrl: "src/assets/Generated Image November 09, 2025 - 5_39PM.png"
    },
    // {
    //   title: "Task Manager Pro",
    //   description: "Advanced task management application with team collaboration features, deadline tracking, and productivity analytics.",
    //   technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1139&q=80"
    // }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <p className="section-subtitle fade-in">Here are some of my recent projects that showcase my skills and experience</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card card fade-in`}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="project-image-content"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      className="project-link live-demo"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View live project"
                    >
                      <span className="link-icon">🌐</span>
                      <span className="link-text">Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-link source-code"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <span className="link-icon">💻</span>
                      <span className="link-text">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;