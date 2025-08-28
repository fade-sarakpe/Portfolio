import nextSvg from "@/assets/icon/nextjs-svg.svg";
import reactSvg from "@/assets/icon/react-svg.svg";
import htmlSvg from "@/assets/icon/html-svg.svg";
import nodeSvg from "@/assets/icon/nodejs-svg.svg";
import expressSvg from "@/assets/icon/express-svg.svg";
import Image from "next/image";
import "./About.css";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <SectionTitle title="About"/>
          <p>
            I&apos;m Fadi Sarakpi, a passionate Full-Stack Developer specializing in both
            Front-End and Back-End development. I enjoy building modern, dynamic, and
            user-friendly applications, and I&apos;m always eager to learn new
            technologies and enhance my skills.
          </p>
      </div>
      <div className="about-circle">
        <div className="circle-container">
          <div className="circle">
            <Image src={htmlSvg} width={50} height={50} alt="html5" title="html5" />
          </div>
          <div className="circle2">
            <Image src={nodeSvg} width={40} height={40} alt="node-js" title="node-js" />
          </div>
          <div className="circle3">
            <Image src={expressSvg} width={40} height={40} alt="express-js" title="express-js" />
          </div>
          <div className="circle4">
            <Image src={reactSvg} width={50} height={50} alt="react" title="react" />
          </div>
          <div className="circle_center">
            <div className="circle5">
              <Image src={nextSvg} width={50} height={50} alt="next-js" title="next-js" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
