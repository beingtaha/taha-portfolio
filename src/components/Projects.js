// components/Projects.js

import React, { useState } from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { myProjectsList, internshipProjectsList } from "../utils/helperList";
import Particles from "../utils/particles";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("myProjects");

  const projectsToShow =
    activeTab === "myProjects" ? myProjectsList : internshipProjectsList;

  const tabs = [
    {
      id: "myProjects",
      label: "My Projects",
      icon: "👨‍💻",
      count: myProjectsList.length,
    },
    {
      id: "internship",
      label: "AppVerse Internship",
      icon: "🎓",
      count: internshipProjectsList.length,
    },
  ];

  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {/* ============================================
            HEADER SECTION - Updated with title & description
            ============================================ */}
        <div className="projects-header">
          {/* 🔥 Main Title - Like "Technical Skills" */}
          <h2 className="color-custom-blue ml-lg-5 proj-slide">
            Featured Projects
          </h2>

          {/* 🔥 Section Divider - Like Skills section */}
          <div className="section-divider"></div>

          {/* 🔥 Description - Like "My technical expertise across different domains" */}
          <p className="section-subtitle color-custom-grey ml-lg-5">
            Showcasing my work from personal projects and AppVerse internship
          </p>

          {/* Category Tabs */}
          <div className="projects-categories">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`category-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-name">
                  {tab.label}
                  <span className="tab-count">({tab.count})</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display */}
        {projectsToShow.length > 0 ? (
          projectsToShow.map((proj) => (
            <Row
              className="my-5 px-md-5 proj-opacity"
              xs={1}
              md={2}
              key={proj.label}
            >
              <Col>
                <img
                  className="img-fluid proj-image shadow"
                  src={proj.imgSrc}
                  alt={proj.label}
                  loading="lazy"
                />
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-custom-blue mb-0">
                  {proj.label}
                </h3>
                <br />
                {proj.description && (
                  <>
                    <span>{proj.description}</span>
                    <br />
                  </>
                )}
                {proj.src && (
                  <>
                    Demo:{" "}
                    <a
                      href={proj.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.src}
                    </a>
                    <br />
                    <br />
                  </>
                )}
                {proj.githubSrc && (
                  <>
                    Source code:{" "}
                    <a
                      href={proj.githubSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.githubSrc}
                    </a>
                    <br />
                  </>
                )}
                <div className="mt-2">
                  {proj.stack.map((tech, index) => (
                    <Badge
                      key={index}
                      pill
                      variant="secondary"
                      className="mr-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
          ))
        ) : (
          <div className="text-center my-5">
            <p className="color-custom-grey">
              No projects to display in this category yet.
            </p>
          </div>
        )}
      </Container>
      <Particles />
    </>
  );
};

export default Projects;
