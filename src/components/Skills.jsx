import "./Skills.css";
import {
  SiReact,
  SiJavascript,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFirebase,
  SiNodedotjs,
  // SiTensorflow,
  // SiScikitlearn,
  SiGit,
  SiGithub,
  SiCanva,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      // { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      // { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Canva", icon: SiCanva, color: "#12e2fdff" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">Skills & Expertise</h1>
          <p className="skills-subtitle">
            A diverse toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="skills-layout">
          {/* First Row: Frontend and Backend side by side */}
          <div className="top-row">
            <div className="skill-column">
              <h3 className="category-title">Frontend Development</h3>
              <div className="skills-grid">
                {skillCategories[0].skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skill-column">
              <h3 className="category-title">Backend Development</h3>
              <div className="skills-grid">
                {skillCategories[1].skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row: AI & ML and Tools side by side */}
          <div className="bottom-row">
            <div className="skill-column">
              <h3 className="category-title">AI & Machine Learning</h3>
              <div className="skills-grid">
                {skillCategories[2].skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skill-column">
              <h3 className="category-title">Tools & Others</h3>
              <div className="skills-grid">
                {skillCategories[3].skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}