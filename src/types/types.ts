import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface LinksType {
    id: string; 
    text: string;
    href: string;
  }

export interface ServicesType {
    id: string; 
    title: string;
    description: string;
    icon: IconType;
  }

export interface ProjectType {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface ThemeContextType {
    theme: string;
    toggleTheme: (newTheme: string) => void;
  };