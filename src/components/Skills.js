import React, { useState } from "react";
import CustomNav from "./NavBar";
import Particles from "../utils/particles";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Development & Frontend",
  );

  const skillsData = {
    technicalSkills: [
      {
        category: "Development & Frontend",
        skills: [
          { name: "React.js", level: 85, icon: "⚛️" },
          { name: "JavaScript (ES6+)", level: 80, icon: "📜" },
          { name: "HTML5", level: 90, icon: "🌐" },
          { name: "CSS3", level: 85, icon: "🎨" },
          { name: "Git", level: 75, icon: "📦" },
          { name: "Frontend Development", level: 85, icon: "💻" },
        ],
      },
      {
        category: "Networking & IT Support",
        skills: [
          { name: "Network Monitoring (NMS)", level: 80, icon: "📡" },
          { name: "Troubleshooting", level: 85, icon: "🔧" },
          { name: "Customer Support", level: 90, icon: "🤝" },
          { name: "System Security", level: 75, icon: "🔒" },
          { name: "IT Infrastructure", level: 70, icon: "🏗️" },
        ],
      },
      {
        category: "ERP & System Analysis",
        skills: [
          { name: "Odoo ERP", level: 80, icon: "📊" },
          { name: "Business Process Analysis", level: 75, icon: "🔍" },
          { name: "Data Management", level: 85, icon: "🗃️" },
          { name: "Reporting", level: 80, icon: "📈" },
          { name: "Inventory Management", level: 85, icon: "📦" },
        ],
      },
      {
        category: "Tools & Platforms",
        skills: [
          { name: "MS Office", level: 90, icon: "📝" },
          { name: "WordPress", level: 75, icon: "✍️" },
          { name: "Basic SQL", level: 70, icon: "🗄️" },
          { name: "Cross-functional Coordination", level: 85, icon: "🤝" },
          { name: "Project Management", level: 75, icon: "📋" },
        ],
      },
    ],
    softSkills: [
      { name: "Communication", level: 90 },
      { name: "Problem-Solving", level: 85 },
      { name: "Analytical Thinking", level: 80 },
      { name: "Adaptability", level: 85 },
      { name: "Team Collaboration", level: 90 },
      { name: "Time Management", level: 80 },
    ],
  };

  return (
    <>
      <CustomNav />
      <section className="skills-section" id="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title color-custom-blue">
              Technical Skills
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle color-custom-grey">
              My technical expertise across different domains
            </p>
          </div>

          <div className="skills-categories">
            {skillsData.technicalSkills.map((category) => (
              <button
                key={category.category}
                className={`category-tab ${activeCategory === category.category ? "active" : ""}`}
                onClick={() => setActiveCategory(category.category)}
              >
                <span className="tab-icon">
                  {category.skills[0]?.icon || "💼"}
                </span>
                <span className="tab-name">
                  {category.category.split(" & ")[0]}
                </span>
              </button>
            ))}
          </div>

          <div className="skills-display">
            {skillsData.technicalSkills
              .filter((category) => category.category === activeCategory)
              .map((category) => (
                <div
                  key={category.category}
                  className="skills-category-content"
                >
                  <h3 className="category-title">{category.category}</h3>
                  <div className="skills-grid">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="skill-progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="progress-fill"></div>
                          </div>
                          <div className="progress-dots">
                            {[...Array(10)].map((_, i) => (
                              <span
                                key={i}
                                className={`progress-dot ${i * 10 < skill.level ? "filled" : ""}`}
                              ></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="soft-skills-section">
            <div className="section-header">
              <h3 className="section-title color-custom-blue">Soft Skills</h3>
              <div className="section-divider"></div>
            </div>

            <div className="soft-skills-grid">
              {skillsData.softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-header">
                    <h4 className="soft-skill-name">{skill.name}</h4>
                    <div className="soft-skill-rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star ${i < Math.floor(skill.level / 20) ? "filled" : ""}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="soft-skill-visual">
                    <div
                      className="soft-skill-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h3 className="summary-title">Skill Distribution</h3>
              <div className="skill-categories-chart">
                {skillsData.technicalSkills.map((category, index) => {
                  const avgLevel = Math.round(
                    category.skills.reduce(
                      (sum, skill) => sum + skill.level,
                      0,
                    ) / category.skills.length,
                  );

                  return (
                    <div key={index} className="chart-item">
                      <div className="chart-label">
                        <span>{category.category.split(" & ")[0]}</span>
                        <span>{avgLevel}%</span>
                      </div>
                      <div className="chart-bar">
                        <div
                          className="chart-fill"
                          style={{ width: `${avgLevel}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Particles />
    </>
  );
};

export default Skills;
