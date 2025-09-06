
import SectionTitle from "@/components/ui/section-title/SectionTitle"
import { skills } from "@/data/skills/skills"
import './Skills.css';

export default function Skills() {
  return (
    <div id="skills">
        <SectionTitle title="Skills" />
        <div className="skills-container">
            {skills.map((skill, i) => (
                <div data-aos="flip-left" key={i} className="skill-item">{skill.name}</div>
            ))}
        </div>
    </div>
  )
}
