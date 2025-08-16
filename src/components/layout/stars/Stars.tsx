"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Stars = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      style={{ position: 'absolute', zIndex: 0 }}
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          size: { value: 1 },
          number: { value: 400 },
          color: { value: "#ffffff" },
          opacity: { random: true },
          move: { enable: true, speed: 0.8, direction: "top", straight: true,
                   outModes: { default: "out" }},
        }
      }}
    />
  );
};

export default Stars;
