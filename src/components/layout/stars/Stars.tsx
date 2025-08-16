"use client";
import { useTheme } from "@/contexts/themeContext";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Stars = () => {
  const { theme } = useTheme();
  const [colors, setColors] = useState({ background: "#000", text: "#fff" });

  useEffect(() => {
    setTimeout(() => {
      const rootStyles = getComputedStyle(document.documentElement);

      setColors({
        background: rootStyles.getPropertyValue("--background-color").trim(),
        text: rootStyles.getPropertyValue("--text-color").trim(),
      });
      console.log(colors);
    }, 50);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      style={{ position: 'absolute', zIndex: 0 }}
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: colors.background },
        particles: {
          size: { value: 1 },
          number: { value: 400 },
          color: { value: colors.text },
          opacity: { random: true },
          move: { enable: true, speed: 0.8, direction: "top", straight: true,
                   outModes: { default: "out" }},
        }
      }}
    />
  );
};

export default Stars;
