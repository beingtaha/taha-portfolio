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
              An IT professional turned frontend & mobile developer from
              Karachi, Pakistan, with a career that's spanned network
              engineering, systems/data analysis, and now software
              development.
            </p>
            <p>
              Started in network engineering at PTCL, followed by roles in
              ERP systems (Odoo) and data operations - building a strong
              foundation in structured problem-solving and cross-functional
              collaboration.
            </p>
            <p>
              Today, focused on building web and mobile applications using
              React.js, React Native, and Flutter. Drives development through
              AI coding agents (Claude, Antigravity), guided by detailed
              project specs, to consistently deliver faster and with higher
              quality than standard timelines.
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
