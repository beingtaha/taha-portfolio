import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../utils/timeline";

const About = () => {
  return (
    <Container className="mt-2 mr-lg-5" fluid>
      <Row xs={1} md={2}>
        <Col className="mb-3">
          <Timeline />
        </Col>
        <Col className="px-lg-5 mb-2">
          <div className="px-lg-5 about-text text-justify">
            <p className="about-me-block">About</p>
            <p>
              An IT Professional from Karachi, Pakistan with diverse expertise
              in Frontend Development, ERP Systems, Network Engineering, and
              Data Management.
            </p>
            <p>
              Proven ability to adapt across technical domains - from building
              interactive web applications to managing inventory systems and
              providing IT support. Strong analytical, problem-solving, and
              communication skills with experience in multiple IT roles
              including React JS Developer, Pricing Officer & Inventory
              Management, Sr. Network Engineer, and Data Entry Operator.
            </p>
            <p>
              Dedicated to creating efficient, user-friendly solutions and
              continuously expanding technical expertise. Currently focused on
              Frontend Development with React.js while maintaining proficiency
              in ERP systems and network infrastructure management.
            </p>
          </div>
          <div className="text-center mt-5">
            <img
              src="static/images/programmer.svg"
              alt="programmer"
              className="programmer"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
