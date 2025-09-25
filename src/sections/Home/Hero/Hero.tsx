"use client";
import React from "react";
import dynamic from "next/dynamic";
const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), { ssr: false });
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi,<br /> I am <span>Fadi Sarakpi</span></h1>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Arial",
            color: "var(--primary-color)",
            fontWeight: 500,
            fontSize: "1.8rem",
          }}
          startDelay={2000}
          cursorColor="var(--primary-color)"
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
        <p>I&apos;m a Computer System Engineer with a passion for web development, With a hands-on experience in modern web technologies</p>
        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

