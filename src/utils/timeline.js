import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {/* React JS Developer - Latest Experience */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Dec 2025 - Present"
        dateClassName="text-dark mx-lg-2"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faBriefcase}
            className="timeline-work-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">React JS Developer</h3>
        <h6 className="vertical-timeline-element-subtitle mt-1">
          Appverse Internship & Freelancer
        </h6>
        <p>React.js | JavaScript | HTML | CSS | Git</p>
      </VerticalTimelineElement>

      {/* Pricing Officer & Inventory Management */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="April 2025 - Nov 2025"
        dateClassName="text-dark mx-lg-2"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faBriefcase}
            className="timeline-work-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Pricing Officer & Inventory Management
        </h3>
        <h6 className="vertical-timeline-element-subtitle mt-1">
          Brisk Line LLC
        </h6>
        <p>Odoo ERP | Inventory Management | Reporting | Coordination</p>
      </VerticalTimelineElement>

      {/* Sr. Network Engineer & Help Desk */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Jun 2021 - Mar 2025"
        dateClassName="text-dark mx-lg-2"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faBriefcase}
            className="timeline-work-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Sr. Network Engineer & Help Desk
        </h3>
        <h6 className="vertical-timeline-element-subtitle mt-1">
          PTCL Pvt Ltd
        </h6>
        <p>
          Network Monitoring | Troubleshooting | Customer Support | System
          Security
        </p>
      </VerticalTimelineElement>

      {/* Data Entry Operator */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2019 - 2023"
        dateClassName="text-dark mx-lg-2"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faBriefcase}
            className="timeline-work-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Data Entry Operator</h3>
        <h6 className="vertical-timeline-element-subtitle mt-1">
          Intrawide Pvt. Ltd
        </h6>
        <p>Data Entry | WordPress | Data Management | Accuracy</p>
      </VerticalTimelineElement>

      {/* Education - BS in Management & Technology */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019 - 2023"
        dateClassName="mx-lg-2"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faGraduationCap}
            className="timeline-grad-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title mb-4">
          BS in Management & Technology
        </h3>
        <h6 className="vertical-timeline-element-subtitle">
          Ziauddin University (HEC), Karachi
        </h6>
      </VerticalTimelineElement>

      {/* Education - DAE in Computer Information Technology */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2018"
        dateClassName="mx-lg-2"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faGraduationCap}
            className="timeline-grad-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title mb-4">
          DAE in Computer Information Technology
        </h3>
        <h6 className="vertical-timeline-element-subtitle">
          Hasani College of Technology (SBTE), Karachi
        </h6>
      </VerticalTimelineElement>

      {/* Education - Matric in Computer & Science */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2015"
        dateClassName="mx-lg-2"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faGraduationCap}
            className="timeline-grad-icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title mb-4">
          Matric in Computer & Science
        </h3>
        <h6 className="vertical-timeline-element-subtitle">
          Issar Foundation School (AKUEB), Karachi
        </h6>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
