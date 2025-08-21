"use client";
import React from "react";
import dynamic from "next/dynamic";
const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), { ssr: false });
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I am <span>Fadi Sarakpi</span></h1>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Arial",
            color: "#00CFFF",
            fontWeight: 500,
            fontSize: "1.8rem",
          }}
          startDelay={3000}
          cursorColor="#00CFFF"
          multiText={[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
          ]}
          multiTextDelay={2000}
          typeSpeed={160}
          deleteSpeed={130}
          multiTextLoop={true} 
        />
        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

