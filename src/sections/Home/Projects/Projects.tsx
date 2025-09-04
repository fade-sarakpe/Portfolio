import githubIcon from "@/assets/icon/icons-github.png";
import linkIcon from "@/assets/icon/icons-world.png";
import SectionTitle from '@/components/ui/section-title/SectionTitle';
import { projects } from '@/data/projects/projects';
import Image from 'next/image';
import './Projects.css';

export default function Projects() {
  return (
    <div id="projects" className="projects-section">
      <SectionTitle title="Projects" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-row ${index % 2 === 0 ? 'project-row-left' : 'project-row-right'}`}>
            <div className="project-image-container">
              <Image 
                className="project-image" 
                src={project.image} 
                width={500} 
                height={500} 
                alt={project.title}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <Image 
                      src={linkIcon}
                      width={20}
                      height={20}
                      alt="Live Demo"
                    />
                    Visit
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <Image 
                      src={githubIcon}
                      width={20}
                      height={20}
                      alt="GitHub Repository"
                    />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}