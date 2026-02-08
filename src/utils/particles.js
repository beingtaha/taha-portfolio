import { Particles as ReactParticles } from "react-tsparticles";
import { useEffect, useRef } from "react";
import options from "../config/particles.json";

const Particles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Set particles height to match content height
    const updateHeight = () => {
      if (particlesRef.current) {
        const section =
          document.getElementById("skills") ||
          document.getElementById("projects") ||
          document.getElementById("home");
        if (section) {
          const height = section.scrollHeight;
          particlesRef.current.style.height = `${height}px`;
        }
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div ref={particlesRef} className="particle-container">
      <ReactParticles options={options} />
    </div>
  );
};

export default Particles;
